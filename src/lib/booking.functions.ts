import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { bookingSchema } from "./booking-schema";
import type { Database } from "@/integrations/supabase/types";

export const submitBooking = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => bookingSchema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_PUBLISHABLE_KEY;
    if (!url || !key) {
      throw new Error("Backend not configured");
    }

    const supabase = createClient<Database>(url, key, {
      auth: {
        storage: undefined,
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const { error } = await supabase.from("appointments").insert({
      patient_name: data.name,
      patient_phone: data.phone,
      patient_email: data.email ?? null,
      service: data.service,
      preferred_date: data.date,
      preferred_time: "any",
      notes: data.notes ?? null,
      status: "pending",
    });

    if (error) {
      console.error("[booking] insert failed", error);
      throw new Error("Could not save your appointment. Please try again.");
    }

    return { ok: true as const };
  });
