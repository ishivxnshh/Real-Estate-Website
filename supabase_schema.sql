-- Properties Table
CREATE TABLE properties (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    price_numeric DECIMAL NOT NULL,
    price_formatted VARCHAR(50) NOT NULL,
    location text NOT NULL,
    image_url text NOT NULL,
    beds INTEGER NOT NULL,
    sqft VARCHAR(50) NOT NULL,
    is_new BOOLEAN DEFAULT false,
    status VARCHAR(50) DEFAULT 'Active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Leads Table
CREATE TABLE leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    property_id UUID REFERENCES properties(id) ON DELETE SET NULL,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    inquiry_details text,
    status VARCHAR(50) DEFAULT 'Pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Allow public read access to properties
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public profiles are viewable by everyone." ON properties FOR SELECT USING (true);

-- Allow public to insert leads
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can insert leads." ON leads FOR INSERT WITH CHECK (true);

-- Allow admins full access (Placeholder for admin RLS)
CREATE POLICY "Admins full access to properties." ON properties FOR ALL USING (true);
CREATE POLICY "Admins full access to leads." ON leads FOR ALL USING (true);

-- Insert dummy data
INSERT INTO properties (title, type, price_numeric, price_formatted, location, image_url, beds, sqft, is_new, status) VALUES
('Villa Horizon', 'Villa', 12500000, '$12,500,000', 'Beverly Hills, CA', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdzivHoSNNomXzt3ZgWjRphMn0wgBnKMwYCimqMLSh79Cix_fQE0qG39o95gkHsnMhHK_jY9Jy6RQL3HN_QeQ6ADC1PKk_dbhjnDZgCf7qXSG883-nHpDFT0i6C8I9IpK539yWf4E1Z67tjdMy1_kC0XexLHT-IFQWt6j8ZOOocfi_XHHoVetFzzWEvapuLIdnXZfsZWkF7QVWHcoyAOYwTGk6DSAsW_9zSdF_pQHWzKdSH39tI5YSOA', 5, '8,200', true, 'Active'),
('The Apex Penthouse', 'Apartment', 24000000, '$24,000,000', 'Manhattan, NY', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzWKbSmMNaAEIfgQLdL8EjAEZTt6AwxXUzgI5IZbQTRHxF2GAqNqCdBF8_pyIar75iVX0FyIF-V7b3hAZyR6muQm68puJKHtkZBoTpODz5qZLuAy5ujI8UbUItOPnBy8as5lPUS62vblyllgOeuAe4Xzr86HuiIQ2UnTV-gF-DcHB1fhK5mmrIsbIBI_EQH6gR2gh2cILFUzLH22MkaclHQCXVSn1V7COXR-oFpVnG2fBUk6jtjxG0Vg', 4, '6,500', false, 'Active'),
('Oakwood Estate', 'Estate', 18750000, '$18,750,000', 'Montecito, CA', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIvcIUCFnofaiBMB62Yhk556gI0nZhSSbMr7AmabTgXEzNC6o8Pd_tgidyiJBGdA5WCm8LVuOoAAANhf4qfmrvImJeBqbiHjzCRVMuuJjptbHOuBQKborkX_wSQGFHgPSmPy-PtUGDab2HGNtogsalHgIKMD2S3yQ2pMgDTzxTJxffel28i34Mq6ozS3_Qe0GTh1IoIqkDAcrE2xvloG-w2M29YEEsIgO6zQ0-Lzuv5iJyHhYoOanwmw', 7, '12,000', false, 'Active');
