import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle className="stagger-1">Card title</CardTitle>
          <CardDescription className="stagger-2">
            Card description
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="stagger-3">Card content</p>
        </CardContent>
      </Card>
    </section>
  );
}
