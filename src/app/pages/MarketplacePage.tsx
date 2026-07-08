import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { relativeTime, type LeadRow } from "../data/types";
import { Store, Loader2 } from "lucide-react";

export default function MarketplacePage() {
  const [rows, setRows] = useState<LeadRow[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    supabase.from("leads").select("*").eq("routing", "marketplace").order("created_at", { ascending: false })
      .then(({ data }) => { setRows((data ?? []) as LeadRow[]); setLoading(false); });
  }, []);

  return (
    <div className="p-6 max-w-[1400px]">
      <PageHeader title="Marketplace" description="Qualified leads published for contractors to buy." />
      {loading ? (
        <div className="flex items-center gap-2 text-muted-foreground"><Loader2 className="h-4 w-4 animate-spin" /> Loading…</div>
      ) : rows.length === 0 ? (
        <Card><CardContent className="p-12 text-center">
          <Store className="h-8 w-8 mx-auto text-muted-foreground mb-3" />
          <div className="text-lg font-semibold">No leads on marketplace yet</div>
          <p className="text-sm text-muted-foreground mt-1">Publish a lead from its detail page to list it here.</p>
          <Button className="mt-4" asChild><Link to="/leads">Go to leads</Link></Button>
        </CardContent></Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rows.map((l) => (
            <Link to={`/leads/${l.id}`} key={l.id}>
              <Card className="hover:border-primary transition-colors h-full">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-xs font-mono text-muted-foreground">{l.lead_code}</div>
                    {l.priority && <Badge variant={l.priority === "hot" ? "destructive" : "secondary"} className="text-[10px] uppercase">{l.priority}</Badge>}
                  </div>
                  <div className="font-semibold">{l.service}</div>
                  <div className="text-xs text-muted-foreground mt-1">{l.city ?? "—"}, {l.country ?? ""} · {relativeTime(l.created_at)}</div>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Sale price</span>
                    <span className="font-semibold">{l.recommended_sale_price ? `$${Number(l.recommended_sale_price).toLocaleString()}` : "—"}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
