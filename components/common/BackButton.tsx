"use client"

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackButton() {
  const router = useRouter();

  return (
    <div className="mb-6">
      <Button variant="outline" onClick={() => router.back()} className="inline-flex items-center gap-2">
        <ArrowLeft size={16} />
        Go Back
      </Button>
    </div>
  );
}
