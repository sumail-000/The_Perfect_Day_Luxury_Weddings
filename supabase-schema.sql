-- ============================================================
-- TPD Weddings — Supabase Schema
-- Run this in the Supabase SQL Editor to set up all tables,
-- RLS policies, and storage bucket.
-- ============================================================

-- ── site_content (single-row key-value store) ──────────────
create table if not exists site_content (
  id         uuid primary key default gen_random_uuid(),
  section    text unique not null,  -- 'hero', 'about', 'planner_profile', 'contact_info'
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz default now()
);

alter table site_content enable row level security;

create policy "Public read site_content"
  on site_content for select
  using (true);

create policy "Auth write site_content"
  on site_content for update
  using (auth.role() = 'authenticated');

create policy "Auth insert site_content"
  on site_content for insert
  with check (auth.role() = 'authenticated');

-- Seed default rows
insert into site_content (section, data) values
  ('hero', '{
    "badge": "Bespoke Social Experience · UAE",
    "script_heading": "The art of a beautiful celebration",
    "heading": "Ultra-luxury weddings and graceful social events with",
    "heading_accent": "timeless elegance.",
    "description": "The Perfect Day crafts intimate, elegant and deeply personalized celebrations across Ras Al Khaimah, Dubai and other global destinations — blending hospitality, décor, emotion and seamless planning into moments that feel soft, luxurious and unforgettable.",
    "cta_primary": "Let''s plan your Perfect Day",
    "cta_secondary": "View Signature Gallery",
    "tags": ["Luxury Weddings", "Bespoke Styling", "UAE & Destination Events"],
    "background_image": "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=90"
  }'::jsonb),
  ('about', '{
    "script_heading": "About The Perfect Day",
    "heading": "Every celebration should feel poetic, polished and deeply personal.",
    "paragraph_1": "We design weddings and social occasions with a romantic, hospitality-led approach. Our team turns ideas into refined experiences through thoughtful planning, soft luxury aesthetics, and meticulous execution.",
    "paragraph_2": "From beachfront weddings in Ras Al Khaimah to glamorous celebrations in Dubai and destination wedding weekends, we create events that feel effortless for hosts and unforgettable for guests.",
    "cta_text": "Begin Your Journey",
    "image": "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1600&q=85",
    "pillars": [
      "Bespoke weddings and luxury social events across the UAE",
      "Design-led planning with décor, floral and guest experience at the center",
      "Strong understanding of multicultural and Indian wedding formats",
      "End-to-end management including logistics, vendors and hospitality"
    ]
  }'::jsonb),
  ('planner_profile', '{
    "name": "Navdeep Tanwar",
    "title": "Chief Planner",
    "credentials": "Certified Wedding Planner · Interior Designer",
    "subtitle": "The Perfect Day presents",
    "quote": "The most beautiful events are the ones people don''t just see, but deeply feel.",
    "chapters": [
      {
        "title": "The Belief",
        "text": "Navdeep Tanwar''s journey into celebration design began with a simple belief: weddings have never been only about décor, logistics, or grand venues — they are about emotion, memory, intimacy, and the art of creating moments that stay with families forever. That belief became the foundation of The Perfect Day."
      },
      {
        "title": "The Craft",
        "text": "With more than 20 years of experience, Navdeep has built a reputation for crafting celebrations that are as personal as they are spectacular. A certified wedding planner and interior designer, he brings together the eye of a designer, the instinct of a storyteller, and the discipline of a planner who understands that true luxury lies in how effortlessly every detail comes together. Over the years, he has planned and executed more than 100 weddings across India, ranging from intimate family gatherings to lavish multi-day destination celebrations."
      },
      {
        "title": "The Person",
        "text": "What makes Navdeep''s approach truly distinctive is the life he brings into his work beyond events. An avid wanderlust-driven solo traveller, he draws inspiration from places, cultures, architecture, textures, and human connection. A passionate home cook, he believes that the most memorable experiences are built with warmth, soul, and generosity. And as a Virgo who believes in perfection and nothing less, he approaches every celebration with precision, grace, and an uncompromising eye for beauty."
      }
    ],
    "signature_quote": "For Navdeep, every wedding is not just an event — it is a story waiting to be told with elegance, emotion, and unforgettable detail.",
    "portrait_image": "/profile_pic_camera.jpg",
    "selfie_image": "/profile_pic_selfie.jpg",
    "stats": [
      { "number": "100+", "label": "Weddings Planned" },
      { "number": "20+", "label": "Years Experience" },
      { "number": "UAE", "label": "& Destination" }
    ]
  }'::jsonb),
  ('contact_info', '{
    "phone": "+971 52 977 9108",
    "whatsapp_number": "971529779108",
    "address_line_1": "Compass Co-working Center",
    "address_line_2": "Al Shohada Road, Street C",
    "address_line_3": "Al Hamra Area, Ras Al Khaimah",
    "address_line_4": "P.O. Box 16111, UAE",
    "instagram_handle": "tpdweddings",
    "instagram_url": "https://instagram.com/tpdweddings",
    "footer_tagline": "Ultra-luxury wedding and event planning across Ras Al Khaimah, Dubai and other global destinations. We craft bespoke celebrations with timeless elegance."
  }'::jsonb)
on conflict (section) do nothing;

-- ── services ───────────────────────────────────────────────
create table if not exists services (
  id          uuid primary key default gen_random_uuid(),
  category    text not null check (category in ('wedding', 'social', 'destination')),
  title       text not null,
  description text not null,
  sort_order  int not null default 0,
  created_at  timestamptz default now()
);

alter table services enable row level security;

create policy "Public read services" on services for select using (true);
create policy "Auth insert services" on services for insert with check (auth.role() = 'authenticated');
create policy "Auth update services" on services for update using (auth.role() = 'authenticated');
create policy "Auth delete services" on services for delete using (auth.role() = 'authenticated');

insert into services (category, title, description, sort_order) values
  ('wedding', 'Full Planning & Management', 'End-to-end wedding planning from initial concept through flawless day-of execution.', 0),
  ('wedding', 'Concept Design & Décor Styling', 'Bespoke concept design, décor styling and floral direction tailored to your story.', 1),
  ('wedding', 'Venue Sourcing', 'Curated venue sourcing across Ras Al Khaimah, Dubai and other global destinations.', 2),
  ('wedding', 'Guest Hospitality & Concierge', 'Rooming lists, transport coordination, airport concierge and seamless guest hospitality.', 3),
  ('social', 'Luxury Engagements & Proposals', 'Thoughtfully crafted proposal moments and intimate engagement celebrations.', 0),
  ('social', 'Receptions & Anniversaries', 'Milestone receptions, anniversary dinners and curated social celebrations.', 1),
  ('social', 'Private Dinners & Soirées', 'Private family dinners, intimate gatherings and bespoke luxury social events.', 2),
  ('social', 'Entertainment & Coordination', 'Entertainment curation, gifting, guest flow design and seamless event-day coordination.', 3),
  ('destination', 'Multi-Day Wedding Planning', 'Full multi-day destination wedding planning from logistics to love story moments.', 0),
  ('destination', 'Indian & Multicultural Weddings', 'Deep expertise in Indian wedding rituals, multicultural formats and traditional ceremonies.', 1),
  ('destination', 'Travel & Vendor Logistics', 'Travel coordination, international vendor liaison and complete production planning.', 2),
  ('destination', 'Family & Guest Experience', 'Personalized hospitality programs for families and international guests.', 3);

-- ── gallery_items ──────────────────────────────────────────
create table if not exists gallery_items (
  id         uuid primary key default gen_random_uuid(),
  title      text not null,
  subtitle   text not null default '',
  image_url  text not null,
  sort_order int not null default 0,
  created_at timestamptz default now()
);

alter table gallery_items enable row level security;

create policy "Public read gallery" on gallery_items for select using (true);
create policy "Auth insert gallery" on gallery_items for insert with check (auth.role() = 'authenticated');
create policy "Auth update gallery" on gallery_items for update using (auth.role() = 'authenticated');
create policy "Auth delete gallery" on gallery_items for delete using (auth.role() = 'authenticated');

insert into gallery_items (title, subtitle, image_url, sort_order) values
  ('Floral Stage Styling', 'Romantic Outdoor Celebration', 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', 0),
  ('Luxury Tablescape', 'Statement Florals & Details', 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80', 1),
  ('Editorial Centerpiece', 'Design-Led Event Styling', 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80', 2),
  ('Pastel Mehendi Backdrop', 'Soft Indian Celebration Design', 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80', 3),
  ('Heritage Entrance Styling', 'Traditional Inspired Details', 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80', 4),
  ('Garden Ceremony', 'Aisle Florals & Candles', 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=800&q=80', 5),
  ('Bridal Detail', 'Soft Luxury Aesthetic', 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80', 6),
  ('Reception Hall', 'Grand Luxury Setting', 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&q=80', 7),
  ('Lavender Lounge Styling', 'Pastel Floral Stage', 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80', 8);

-- ── faqs ───────────────────────────────────────────────────
create table if not exists faqs (
  id         uuid primary key default gen_random_uuid(),
  question   text not null,
  answer     text not null,
  sort_order int not null default 0,
  created_at timestamptz default now()
);

alter table faqs enable row level security;

create policy "Public read faqs" on faqs for select using (true);
create policy "Auth insert faqs" on faqs for insert with check (auth.role() = 'authenticated');
create policy "Auth update faqs" on faqs for update using (auth.role() = 'authenticated');
create policy "Auth delete faqs" on faqs for delete using (auth.role() = 'authenticated');

insert into faqs (question, answer, sort_order) values
  ('Do you plan both weddings and social events?', 'Yes. We design and manage bespoke weddings, engagements, receptions, anniversaries, private celebrations, and luxury social events.', 0),
  ('Which locations do you serve?', 'We are based in Ras Al Khaimah and serve clients across the UAE, including Dubai, as well as other global destinations worldwide.', 1),
  ('Do you support Indian and multicultural weddings?', 'Absolutely. We are experienced in multi-event celebrations, cultural rituals, guest hospitality, décor storytelling, and destination wedding logistics.', 2),
  ('Can you help with venue sourcing and guest accommodation?', 'Yes. Venue sourcing, hotel coordination, guest rooming, airport pickups, transportation, and hospitality planning are all part of our service approach.', 3),
  ('What is your planning process like?', 'We begin with a discovery consultation, followed by a tailored proposal covering concept, design, logistics and budget. From there, we work closely with you at every stage until the last moment of your event.', 4);

-- ── instagram_images ───────────────────────────────────────
create table if not exists instagram_images (
  id         uuid primary key default gen_random_uuid(),
  image_url  text not null,
  sort_order int not null default 0,
  created_at timestamptz default now()
);

alter table instagram_images enable row level security;

create policy "Public read instagram" on instagram_images for select using (true);
create policy "Auth insert instagram" on instagram_images for insert with check (auth.role() = 'authenticated');
create policy "Auth update instagram" on instagram_images for update using (auth.role() = 'authenticated');
create policy "Auth delete instagram" on instagram_images for delete using (auth.role() = 'authenticated');

insert into instagram_images (image_url, sort_order) values
  ('https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80', 0),
  ('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&q=80', 1),
  ('https://images.unsplash.com/photo-1510076857177-7470076d4098?w=500&q=80', 2),
  ('https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500&q=80', 3),
  ('https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500&q=80', 4),
  ('https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=500&q=80', 5);

-- ── Storage bucket for image uploads ───────────────────────
insert into storage.buckets (id, name, public)
values ('images', 'images', true)
on conflict (id) do nothing;

create policy "Public read images"
  on storage.objects for select
  using (bucket_id = 'images');

create policy "Auth upload images"
  on storage.objects for insert
  with check (bucket_id = 'images' and auth.role() = 'authenticated');

create policy "Auth update images"
  on storage.objects for update
  using (bucket_id = 'images' and auth.role() = 'authenticated');

create policy "Auth delete images"
  on storage.objects for delete
  using (bucket_id = 'images' and auth.role() = 'authenticated');
