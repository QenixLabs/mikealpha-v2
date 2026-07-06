import { useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { ArrowLeft, Download, Mail, Check, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import { products } from "@/data/products";

type Tab = "description" | "specs" | "application" | "related";

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("description");

  const product = useMemo(() => products.find((p) => p.slug === slug), [slug]);

  const related = useMemo(
    () =>
      product?.relatedSlugs
        ?.map((s) => products.find((p) => p.slug === s))
        .filter(Boolean) ?? [],
    [product]
  );

  const groupMembers = useMemo(() => {
    if (!product?.groupKey) return [];
    return products
      .filter((p) => p.groupKey === product.groupKey)
      .sort((a, b) => a.id - b.id);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-32 pb-16 max-w-container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-brand-text-primary mb-4">Product not found</h1>
          <button
            onClick={() => navigate("/products")}
            className="inline-flex items-center gap-2 text-coral hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to products
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  const isGroupRoot =
    product.groupKey && groupMembers.length > 0 && product.id === groupMembers[0].id;

  if (isGroupRoot) {
    const title = product.groupName ?? product.name;
    const description = product.groupDescription ?? product.shortDescription;

    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-28 pb-16">
          <section className="max-w-container mx-auto px-4 lg:px-6">
            <button
              onClick={() => navigate("/products")}
              className="inline-flex items-center gap-2 text-sm text-brand-text-secondary hover:text-coral transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to products
            </button>

            <div className="max-w-3xl mx-auto bg-white border border-brand-border rounded-2xl overflow-hidden">
              <div className="bg-brand-background rounded-2xl border border-brand-border p-8 lg:p-12 flex items-center justify-center min-h-[420px]">
                <img
                  src={product.image}
                  alt={title}
                  className="max-h-80 max-w-full object-contain"
                />
              </div>

              <div className="p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-bold text-navy mb-3">{title}</h1>
                <p className="text-brand-text-secondary mb-8">{description}</p>

                <div className="border-t border-brand-border pt-8">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted mb-4">
                    Available Grades
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {groupMembers.map((m) => (
                      <Link
                        key={m.slug}
                        to={`/products/${m.slug}`}
                        className="flex items-center justify-between gap-3 px-4 py-3 bg-brand-background border border-brand-border text-sm font-medium text-brand-text-primary hover:border-navy hover:text-navy transition-colors rounded"
                      >
                        <span>{m.grade ?? m.name}</span>
                        <ArrowRight className="w-4 h-4 shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const nutrientEntries = Object.entries(product.nutrients);

  const specEntries = useMemo(() => {
    const base: Record<string, string> = {
      Formula: product.formula,
      Category: product.category,
      "Product Line": product.productLine,
      Packaging: product.packaging,
      Application: product.application,
      ...product.nutrients,
    };
    if (product.dosage) {
      for (const d of product.dosage) {
        base[d.crop] = d.amount;
      }
    }
    return Object.entries({ ...base, ...(product.specs ?? {}) });
  }, [product]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-28 pb-16">
        {/* Product hero */}
        <section className="max-w-container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Image */}
            <div className="bg-brand-background rounded-2xl border border-brand-border p-8 lg:p-12 flex items-center justify-center min-h-[420px]">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-80 max-w-full object-contain"
              />
            </div>

            {/* Details */}
            <div className="py-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-5 bg-coral" />
                <span className="text-xs font-bold uppercase tracking-widest text-coral">{product.category}</span>
                <span className="h-px w-5 bg-coral" />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-navy mb-3">{product.name}</h1>
              <p className="text-brand-text-secondary mb-8">{product.shortDescription}</p>

              {product.benefits.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                  {product.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2">
                      <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-coral text-coral shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span className="text-sm text-brand-text-secondary">{benefit}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted mb-3">Key Nutrients</h3>
                <div className="flex flex-wrap gap-2">
                  {nutrientEntries.map(([key, value]) => (
                    <span
                      key={key}
                      className="text-sm border border-brand-border text-brand-text-primary px-3 py-1.5 rounded"
                    >
                      <strong>{key}:</strong> {value}
                    </span>
                  ))}
                </div>
              </div>

              {product.dosage && product.dosage.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted mb-3">Application</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.dosage.map((d) => (
                      <div
                        key={d.crop}
                        className="bg-white border border-brand-border p-4 rounded"
                      >
                        <p className="text-[10px] uppercase tracking-wider text-brand-text-muted mb-1">{d.crop}</p>
                        <p className="text-sm font-semibold text-brand-text-primary">{d.amount}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 border border-brand-border text-sm font-medium text-brand-text-primary hover:border-navy hover:text-navy transition-colors rounded">
                  <Download className="w-4 h-4" /> Datasheet
                </button>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-coral text-white text-sm font-medium hover:bg-coral-dark transition-colors rounded"
                >
                  <Mail className="w-4 h-4" /> Enquire Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="max-w-container mx-auto px-4 lg:px-6 mt-16">
          <div className="border-b border-brand-border mb-8">
            <nav className="flex gap-8 overflow-x-auto">
              {[
                { key: "description", label: "Description" },
                { key: "specs", label: "Technical Specs" },
                { key: "application", label: "Application" },
                { key: "related", label: "Related Products" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as Tab)}
                  className={`pb-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.key
                      ? "border-coral text-coral"
                      : "border-transparent text-brand-text-secondary hover:text-navy"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="bg-white border border-brand-border rounded-lg p-6 md:p-8">
            {activeTab === "description" && (
              <div className="animate-in fade-in duration-200">
                <h3 className="text-xl font-bold text-navy mb-4">Product Description</h3>
                <p className="text-brand-text-secondary leading-relaxed mb-8">{product.fullDescription}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <InfoCard label="Application" value={product.application} />
                  <InfoCard label="Packaging" value={product.packaging} />
                  <InfoCard label="Category" value={product.category} />
                  <InfoCard label="Product Line" value={product.productLine} />
                </div>
              </div>
            )}

            {activeTab === "specs" && (
              <div className="animate-in fade-in duration-200">
                <h3 className="text-xl font-bold text-navy mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {specEntries.map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between p-3 bg-brand-background rounded border border-brand-border"
                    >
                      <span className="text-sm text-brand-text-secondary">{key}</span>
                      <span className="text-sm font-medium text-brand-text-primary text-right ml-4">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "application" && (
              <div className="animate-in fade-in duration-200">
                <h3 className="text-xl font-bold text-navy mb-4">Application Guidelines</h3>
                <p className="text-brand-text-secondary mb-6">{product.application}</p>
                {product.dosage && product.dosage.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {product.dosage.map((d) => (
                      <div
                        key={d.crop}
                        className="p-4 bg-brand-background rounded border border-brand-border"
                      >
                        <p className="text-[10px] uppercase tracking-wider text-brand-text-muted mb-1">{d.crop}</p>
                        <p className="text-base font-semibold text-brand-text-primary">{d.amount}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "related" && (
              <div className="animate-in fade-in duration-200">
                <h3 className="text-xl font-bold text-navy mb-4">Related Products</h3>
                {related.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {related.map((p) => (
                      <Link
                        key={p!.id}
                        to={`/products/${p!.slug}`}
                        className="group bg-brand-background border border-brand-border rounded-lg overflow-hidden hover:shadow-card transition-all"
                      >
                        <div className="aspect-[4/3] bg-white flex items-center justify-center p-4">
                          <img
                            src={p!.image}
                            alt={p!.name}
                            className="max-h-28 object-contain group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="p-4">
                          <p className="text-xs text-coral font-semibold uppercase mb-1">{p!.category}</p>
                          <h4 className="text-sm font-bold text-navy group-hover:text-coral transition-colors">{p!.name}</h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-brand-text-secondary">No related products listed.</p>
                )}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-brand-background p-4 rounded border border-brand-border">
      <p className="text-[10px] uppercase tracking-wider text-brand-text-muted mb-1">{label}</p>
      <p className="text-sm font-semibold text-brand-text-primary">{value}</p>
    </div>
  );
}
