import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { LayoutGrid, List, Search, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import { products, categories, productLines, type Product } from "@/data/products";

type SortOption = "default" | "name-asc" | "name-desc" | "category";
type ViewMode = "grid" | "list";

function sortProducts(list: Product[], sort: SortOption) {
  const sorted = [...list];
  switch (sort) {
    case "name-asc":
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      sorted.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "category":
      sorted.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
      break;
    default:
      break;
  }
  return sorted;
}

interface ProductGroup {
  key: string;
  representative: Product;
  members: Product[];
}

function groupProducts(list: Product[]): ProductGroup[] {
  const map = new Map<string, Product[]>();
  for (const product of list) {
    const key = product.groupKey ?? product.slug;
    const members = map.get(key) ?? [];
    members.push(product);
    map.set(key, members);
  }
  const groups: ProductGroup[] = [];
  for (const [key, members] of map) {
    members.sort((a, b) => a.id - b.id);
    groups.push({ key, representative: members[0], members });
  }
  return groups;
}

function ProductCard({ product, view }: { product: Product; view: ViewMode }) {
  const title = product.groupName ?? product.name;
  const description = product.groupDescription ?? product.shortDescription;

  if (view === "list") {
    return (
      <Link
        to={`/products/${product.slug}`}
        className="group flex flex-col sm:flex-row bg-white border border-brand-border rounded-lg overflow-hidden hover:shadow-card-hover transition-all duration-300"
      >
        <div className="sm:w-56 shrink-0 aspect-[4/3] sm:aspect-auto bg-brand-background-alt flex items-center justify-center p-6">
          <img
            src={product.image}
            alt={title}
            className="max-h-32 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-coral">{product.category}</span>
            <span className="text-xs text-brand-text-muted">{product.productLine}</span>
          </div>
          <h2 className="text-xl font-bold text-brand-text-primary mb-2 group-hover:text-coral transition-colors">
            {title}
          </h2>
          <p className="text-sm text-brand-text-secondary mb-3">{description}</p>
          <div className="text-sm text-brand-text-muted mb-3">{product.formula}</div>
          <ul className="flex flex-wrap gap-2 mt-auto">
            {product.benefits.slice(0, 3).map((b) => (
              <li key={b} className="text-xs bg-brand-background-alt text-brand-text-secondary px-2 py-1 rounded">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group bg-white border border-brand-border rounded-lg overflow-hidden hover:shadow-card-hover transition-all duration-300 flex flex-col"
    >
      <div className="aspect-[4/3] bg-brand-background-alt flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={title}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-coral">{product.category}</span>
          <span className="text-xs text-brand-text-muted">{product.productLine}</span>
        </div>
        <h2 className="text-lg font-bold text-brand-text-primary mb-2 group-hover:text-coral transition-colors">
          {title}
        </h2>
        <p className="text-sm text-brand-text-secondary line-clamp-2 mb-4 flex-1">{description}</p>
        <div className="text-xs text-brand-text-muted">{product.formula}</div>
      </div>
    </Link>
  );
}

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") ?? "All";
  const activeLine = searchParams.get("line") ?? "All";
  const query = searchParams.get("q") ?? "";

  const [sort, setSort] = useState<SortOption>("name-asc");
  const [view, setView] = useState<ViewMode>("grid");

  const updateParam = (key: "category" | "line" | "q", value: string) => {
    const next = new URLSearchParams(searchParams);
    if (value && value !== "All") {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setSearchParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    let list = products;
    if (activeCategory !== "All") {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (activeLine !== "All") {
      list = list.filter((p) => p.productLine === activeLine);
    }
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.productLine.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          (p.grade && p.grade.toLowerCase().includes(q))
      );
    }
    return sortProducts(list, sort);
  }, [activeCategory, activeLine, query, sort]);

  const groups = useMemo(() => groupProducts(filtered), [filtered]);

  return (
    <div className="min-h-screen bg-brand-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="max-w-container mx-auto px-4 lg:px-6">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-text-primary mb-4">
              Our Products
            </h1>
            <p className="text-lg text-brand-text-secondary max-w-2xl">
              Science-driven crop nutrition solutions designed to improve yield, quality, and plant resilience across every growth stage.
            </p>
          </div>

          {/* Category filter tabs */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => updateParam("category", cat)}
                  className={`px-4 py-2 text-sm font-medium border transition-colors ${
                    active
                      ? "bg-navy text-white border-navy"
                      : "bg-white text-brand-text-secondary border-brand-border hover:border-navy hover:text-navy"
                  }`}
                >
                  {cat === "All" ? "All Products" : cat}
                </button>
              );
            })}
          </div>

          {/* Product line filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {productLines.map((line) => {
              const active = activeLine === line;
              return (
                <button
                  key={line}
                  onClick={() => updateParam("line", line)}
                  className={`px-4 py-2 text-sm font-medium border transition-colors ${
                    active
                      ? "bg-coral text-white border-coral"
                      : "bg-white text-brand-text-secondary border-brand-border hover:border-coral hover:text-coral"
                  }`}
                >
                  {line === "All" ? "All Lines" : line}
                </button>
              );
            })}
          </div>

          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <p className="text-sm text-brand-text-muted">
              Showing {groups.length} result{groups.length !== 1 && "s"}
            </p>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-text-muted" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => updateParam("q", e.target.value)}
                  placeholder="Search products..."
                  className="h-10 pl-9 pr-8 text-sm bg-white border border-brand-border text-brand-text-primary focus:outline-none focus:border-navy w-48 md:w-64"
                />
                {query && (
                  <button
                    onClick={() => updateParam("q", "")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-text-muted hover:text-brand-text-primary"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="h-10 px-3 text-sm bg-white border border-brand-border text-brand-text-primary focus:outline-none focus:border-navy"
              >
                <option value="default">Default</option>
                <option value="name-asc">Name A-Z</option>
                <option value="name-desc">Name Z-A</option>
                <option value="category">Category</option>
              </select>

              <div className="flex border border-brand-border">
                <button
                  onClick={() => setView("grid")}
                  className={`p-2 ${
                    view === "grid"
                      ? "bg-navy text-white"
                      : "bg-white text-brand-text-secondary hover:text-navy"
                  }`}
                  aria-label="Grid view"
                >
                  <LayoutGrid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`p-2 ${
                    view === "list"
                      ? "bg-navy text-white"
                      : "bg-white text-brand-text-secondary hover:text-navy"
                  }`}
                  aria-label="List view"
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Product list */}
          {groups.length === 0 ? (
            <div className="text-center py-20 text-brand-text-secondary">No products found.</div>
          ) : (
            <div
              className={
                view === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "flex flex-col gap-4"
              }
            >
              {groups.map((group) => (
                <ProductCard key={group.key} product={group.representative} view={view} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
