import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { site } from "@/config/site";

export default function HomePage() {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle className="stagger-1">{site.title}</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="stagger-2">{site.description}</p>
        </CardContent>
      </Card>
    </section>
  );
}
