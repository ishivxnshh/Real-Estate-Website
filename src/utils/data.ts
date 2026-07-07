import { createClient as createBrowserClient } from "@/utils/supabase/client";

export const MOCK_PROPERTIES = [
  {
    id: "1",
    title: "Villa Horizon",
    location: "South Extension, Delhi",
    price_formatted: "$12,500,000",
    beds: 5,
    sqft: "8,200",
    is_new: true,
    type: "Villa",
    image_url:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdzivHoSNNomXzt3ZgWjRphMn0wgBnKMwYCimqMLSh79Cix_fQE0qG39o95gkHsnMhHK_jY9Jy6RQL3HN_QeQ6ADC1PKk_dbhjnDZgCf7qXSG883-nHpDFT0i6C8I9IpK539yWf4E1Z67tjdMy1_kC0XexLHT-IFQWt6j8ZOOocfi_XHHoVetFzzWEvapuLIdnXZfsZWkF7QVWHcoyAOYwTGk6DSAsW_9zSdF_pQHWzKdSH39tI5YSOA",
    status: "Active",
  },
  {
    id: "2",
    title: "The Apex Penthouse",
    location: "Bandra West, Mumbai",
    price_formatted: "$24,000,000",
    beds: 4,
    sqft: "6,500",
    is_new: false,
    type: "Apartment",
    image_url:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAzWKbSmMNaAEIfgQLdL8EjAEZTt6AwxXUzgI5IZbQTRHxF2GAqNqCdBF8_pyIar75iVX0FyIF-V7b3hAZyR6muQm68puJKHtkZBoTpODz5qZLuAy5ujI8UbUItOPnBy8as5lPUS62vblyllgOeuAe4Xzr86HuiIQ2UnTV-gF-DcHB1fhK5mmrIsbIBI_EQH6gR2gh2cILFUzLH22MkaclHQCXVSn1V7COXR-oFpVnG2fBUk6jtjxG0Vg",
    status: "Active",
  },
  {
    id: "3",
    title: "Oakwood Estate",
    location: "DLF Phase 5, Gurgaon",
    price_formatted: "$18,750,000",
    beds: 7,
    sqft: "12,000",
    is_new: false,
    type: "Estate",
    image_url:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIvcIUCFnofaiBMB62Yhk556gI0nZhSSbMr7AmabTgXEzNC6o8Pd_tgidyiJBGdA5WCm8LVuOoAAANhf4qfmrvImJeBqbiHjzCRVMuuJjptbHOuBQKborkX_wSQGFHgPSmPy-PtUGDab2HGNtogsalHgIKMD2S3yQ2pMgDTzxTJxffel28i34Mq6ozS3_Qe0GTh1IoIqkDAcrE2xvloG-w2M29YEEsIgO6zQ0-Lzuv5iJyHhYoOanwmw",
    status: "Active",
  },
];

export const MOCK_LEADS = [
  {
    id: "1",
    full_name: "Eleanor Vance",
    email: "e.vance@example.com",
    phone: "+1 (555) 019-2834",
    created_at: new Date().toISOString(),
    status: "Pending",
  },
];

export async function fetchProperties() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return MOCK_PROPERTIES;
  }
  
  try {
    const supabase = createBrowserClient();
    const { data, error } = await supabase.from("properties").select("*");
    if (error) throw error;
    return data || MOCK_PROPERTIES;
  } catch (error) {
    console.error("Supabase fetch properties error:", error);
    return MOCK_PROPERTIES; // Fallback to ensure UI always renders
  }
}

export async function fetchLeads() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return MOCK_LEADS;
  }
  
  try {
    const supabase = createBrowserClient();
    const { data, error } = await supabase.from("leads").select("*");
    if (error) throw error;
    return data || MOCK_LEADS;
  } catch (error) {
    console.error("Supabase fetch leads error:", error);
    return MOCK_LEADS;
  }
}

export async function submitLead(leadData: any) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    console.log("Mock lead submitted:", leadData);
    return { success: true };
  }
  
  try {
    const supabase = createBrowserClient();
    const { error } = await supabase.from("leads").insert([leadData]);
    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error("Error submitting lead:", error);
    return { success: false, error };
  }
}
