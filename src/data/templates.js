/**
 * Pre-loaded professional flyer templates.
 * Each template is a fully self-contained HTML document.
 */
export const TEMPLATES = [
  {
    id: "tech-conf",
    name: "Tech Innovate 2026 Conference",
    category: "Event / Tech",
    format: "a4",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EduReach Summit 2026 Flyer</title>
    <!-- Google Fonts for crisp, modern typography -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Outfit:wght@400;600;700;800&display=swap" rel="stylesheet">
    <!-- FontAwesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <style>
        :root {
            --primary: #1e1b4b; /* Deep Indigo */
            --primary-light: #312e81;
            --teal: #0d9488; /* Vibrant Teal */
            --teal-light: #f0fdfa;
            --accent: #f59e0b; /* Warm Amber */
            --hero-gradient: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
            --card-bg: #ffffff;
            --text-dark: #0f172a;
            --text-muted: #475569;
            --border-color: #e2e8f0;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: #404040;
            color: var(--text-dark);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            -webkit-print-color-adjust: exact;
        }

        /* STRICT A4 DIMENSIONS: 210mm x 297mm */
        .flyer-page {
            width: 210mm;
            height: 297mm;
            background: #f8fafc;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
        }

        @media print {
            body {
                background: none;
            }
            .flyer-page {
                box-shadow: none;
                margin: 0;
                width: 210mm;
                height: 297mm;
            }
        }

        .hero {
            background: var(--hero-gradient);
            color: #ffffff;
            padding: 12mm 14mm 14mm 14mm;
            position: relative;
            clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%);
            z-index: 2;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: -60px;
            right: -60px;
            width: 220px;
            height: 220px;
            background: rgba(13, 148, 136, 0.25);
            border-radius: 50%;
            z-index: -1;
        }

        .badge-top {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: rgba(13, 148, 136, 0.2);
            border: 1px solid rgba(13, 148, 136, 0.4);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 10pt;
            font-weight: 600;
            color: #2dd4bf;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        h1 {
            font-family: 'Outfit', sans-serif;
            font-size: 24pt;
            font-weight: 800;
            line-height: 1.15;
            margin-bottom: 8px;
            letter-spacing: -0.5px;
        }

        h1 span {
            color: var(--accent);
        }

        .subtitle {
            font-size: 10.5pt;
            opacity: 0.9;
            margin-bottom: 14px;
            font-weight: 400;
            line-height: 1.4;
            max-width: 90%;
        }

        .event-meta {
            display: flex;
            gap: 24px;
            font-size: 9.5pt;
            font-weight: 500;
            opacity: 0.95;
        }

        .event-meta-item {
            display: flex;
            align-items: center;
            gap: 7px;
        }

        .event-meta-item i {
            color: var(--accent);
        }

        .content-container {
            padding: 6mm 14mm 10mm 14mm;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 6mm;
        }

        .section-title {
            font-family: 'Outfit', sans-serif;
            font-size: 12.5pt;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 3.5mm;
            display: flex;
            align-items: center;
            gap: 8px;
            border-bottom: 2px solid var(--border-color);
            padding-bottom: 2mm;
        }

        .section-title i {
            color: var(--teal);
        }

        .grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6mm;
        }

        .card {
            background: var(--card-bg);
            border-radius: 8px;
            padding: 4mm 5mm;
            border: 1px solid var(--border-color);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.04);
        }

        /* Mission Statement Box */
        .mission-box {
            background: var(--teal-light);
            border-left: 4px solid var(--teal);
            border-radius: 6px;
            padding: 4mm 5mm;
            font-size: 9.5pt;
            color: #134e4a;
            line-height: 1.5;
            font-weight: 500;
        }

        /* Key Speakers */
        .speaker-list {
            display: flex;
            flex-direction: column;
            gap: 3mm;
        }

        .speaker-item {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .speaker-avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--teal), var(--primary));
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 700;
            font-size: 9.5pt;
            flex-shrink: 0;
        }

        .speaker-info h4 {
            font-size: 9pt;
            font-weight: 700;
            color: var(--text-dark);
        }

        .speaker-info p {
            font-size: 7.5pt;
            color: var(--text-muted);
        }

        /* Workshop Tracks */
        .track-list {
            display: flex;
            flex-direction: column;
            gap: 2.5mm;
        }

        .track-item {
            display: flex;
            align-items: flex-start;
            gap: 10px;
        }

        .track-badge {
            font-size: 7.5pt;
            font-weight: 700;
            color: #92400e;
            background: #fef3c7;
            padding: 2px 6px;
            border-radius: 4px;
            flex-shrink: 0;
            margin-top: 1px;
        }

        .track-details h5 {
            font-size: 8.5pt;
            font-weight: 600;
            color: var(--text-dark);
        }

        .track-details p {
            font-size: 7.5pt;
            color: var(--text-muted);
        }

        /* Venue Banner */
        .venue-banner {
            background: #ffffff;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 4mm 6mm;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.04);
        }

        .venue-info h4 {
            font-family: 'Outfit', sans-serif;
            font-size: 11pt;
            color: var(--primary);
            font-weight: 700;
            margin-bottom: 2px;
        }

        .venue-info p {
            font-size: 8.5pt;
            color: var(--text-muted);
        }

        .venue-icon-box {
            width: 40px;
            height: 40px;
            background: var(--teal-light);
            color: var(--teal);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16pt;
        }

        /* Footer */
        .footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid var(--border-color);
            padding-top: 3mm;
            font-size: 8pt;
            color: var(--text-muted);
        }

        .footer-brand {
            font-family: 'Outfit', sans-serif;
            font-weight: 700;
            color: var(--primary);
        }
    </style>
</head>
<body>

    <div class="flyer-page">
        <!-- Header / Hero Section -->
        <header class="hero">
            <div class="badge-top">
                <i class="fa-solid fa-graduation-cap"></i> Teaching Conference &amp; Outreach
            </div>
            <h1>EduReach Summit 2026:<br><span>Future of Education Outreach</span></h1>
            <p class="subtitle">Exploring next-generation frameworks, equitable community learning, and impactful educator collaboration worldwide.</p>

            <div class="event-meta">
                <div class="event-meta-item">
                    <i class="fa-regular fa-calendar"></i> October 14 – 16, 2026
                </div>
                <div class="event-meta-item">
                    <i class="fa-solid fa-users"></i> Global Educator Gathering
                </div>
            </div>
        </header>

        <!-- Main Body Content -->
        <div class="content-container">

            <!-- Mission Statement -->
            <div>
                <h3 class="section-title"><i class="fa-solid fa-bullseye"></i> Conference Mission</h3>
                <div class="mission-box">
                    "EduReach Summit 2026 is dedicated to uniting global pedagogical leaders, researchers, and community advocates to bridge educational gaps, foster inclusive learning environments, and scale high-impact outreach initiatives for the next decade."
                </div>
            </div>

            <!-- Two Column Layout for Speakers & Workshop Tracks -->
            <div class="grid-2">
                <!-- Keynote Speakers Column -->
                <div>
                    <h3 class="section-title"><i class="fa-solid fa-chalkboard-user"></i> Keynote Speakers</h3>
                    <div class="card">
                        <div class="speaker-list">
                            <div class="speaker-item">
                                <div class="speaker-avatar">RV</div>
                                <div class="speaker-info">
                                    <h4>Dr. Rebecca Vance</h4>
                                    <p>Dean of Education, Global Equity Foundation</p>
                                </div>
                            </div>
                            <div class="speaker-item">
                                <div class="speaker-avatar">JM</div>
                                <div class="speaker-info">
                                    <h4>Jonathan Miller</h4>
                                    <p>Director of Community Impact, EdTech Alliance</p>
                                </div>
                            </div>
                            <div class="speaker-item">
                                <div class="speaker-avatar">SA</div>
                                <div class="speaker-info">
                                    <h4>Dr. Sofia Al-Mansoor</h4>
                                    <p>Pioneering Rural Literacy Initiative Leader</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Workshop Tracks Column -->
                <div>
                    <h3 class="section-title"><i class="fa-solid fa-layer-group"></i> Workshop Tracks</h3>
                    <div class="card">
                        <div class="track-list">
                            <div class="track-item">
                                <span class="track-badge">Track 1</span>
                                <div class="track-details">
                                    <h5>Community-Led Pedagogy</h5>
                                    <p>Building resilient grassroots teaching networks.</p>
                                </div>
                            </div>
                            <div class="track-item">
                                <span class="track-badge">Track 2</span>
                                <div class="track-details">
                                    <h5>Inclusive Digital Classrooms</h5>
                                    <p>Accessible tools &amp; hybrid outreach models.</p>
                                </div>
                            </div>
                            <div class="track-item">
                                <span class="track-badge">Track 3</span>
                                <div class="track-details">
                                    <h5>Grant Scaling &amp; Impact Measurement</h5>
                                    <p>Securing long-term resources for educational equity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Venue Details Banner -->
            <div class="venue-banner">
                <div class="venue-info">
                    <h4>Venue &amp; Location Address</h4>
                    <p>Global Innovation &amp; Learning Center, Hall A &amp; B, 450 Education Boulevard, Metro District</p>
                </div>
                <div class="venue-icon-box">
                    <i class="fa-solid fa-location-dot"></i>
                </div>
            </div>

            <!-- Footer -->
            <footer class="footer">
                <div class="footer-brand">EduReach Summit 2026</div>
                <div>Advancing Educational Equity Through Collaboration</div>
            </footer>

        </div>
    </div>

</body>
</html>`,
  },
  {
    id: "coffee-shop",
    name: "Artisan Coffee Grand Opening",
    category: "Food & Retail",
    format: "letter",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Georgia', serif; }
  body {
    background: #fdfbf7;
    color: #2c221e;
    width: 215.9mm;
    height: 279.4mm;
    padding: 25mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 12px solid #3d2817;
  }
  .header { text-align: center; border-bottom: 2px dashed #bfa181; padding-bottom: 25px; }
  .badge {
    font-family: 'sans-serif';
    background: #5c4033;
    color: #fdfbf7;
    padding: 6px 18px;
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 15px;
    border-radius: 2px;
  }
  h1 { font-size: 48px; font-weight: normal; font-style: italic; color: #3d2817; margin-bottom: 8px; }
  .tagline { font-family: 'sans-serif'; font-size: 14px; color: #7f5539; letter-spacing: 2px; text-transform: uppercase; }

  .menu-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin: 20px 0; }
  .menu-category h3 { font-family: 'sans-serif'; font-size: 16px; color: #5c4033; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #d4a373; padding-bottom: 6px; margin-bottom: 15px; }
  .menu-item { display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 15px; }
  .item-name { font-weight: bold; color: #2c221e; }
  .item-price { color: #8c6239; font-style: italic; }

  .promo-banner {
    background: #f4ebd0;
    border: 1px solid #d4a373;
    padding: 20px;
    text-align: center;
    border-radius: 4px;
  }
  .promo-banner h2 { font-size: 22px; color: #3d2817; margin-bottom: 6px; font-style: italic; }
  .promo-banner p { font-family: 'sans-serif'; font-size: 13px; color: #5c4033; }

  .footer { text-align: center; font-family: 'sans-serif'; font-size: 13px; color: #7f5539; border-top: 2px dashed #bfa181; padding-top: 20px; }
  .footer strong { color: #3d2817; display: block; font-size: 15px; margin-bottom: 4px; }
</style>
</head>
<body>
  <div class="header">
    <span class="badge">Grand Opening Special</span>
    <h1>Velvet Bean Roastery</h1>
    <p class="tagline">Single-Origin Craft Coffee & Artisanal Pastries</p>
  </div>

  <div class="menu-grid">
    <div class="menu-category">
      <h3>Signature Brews</h3>
      <div class="menu-item"><span class="item-name">Ethiopian Yirgacheffe Pour Over</span><span class="item-price">$5.50</span></div>
      <div class="menu-item"><span class="item-name">Velvet Nitro Cold Brew</span><span class="item-price">$6.00</span></div>
      <div class="menu-item"><span class="item-name">Cardamom Honey Latte</span><span class="item-price">$6.50</span></div>
    </div>
    <div class="menu-category">
      <h3>Fresh Bakery</h3>
      <div class="menu-item"><span class="item-name">Almond Crusted Croissant</span><span class="item-price">$4.75</span></div>
      <div class="menu-item"><span class="item-name">Wild Blueberry Scone</span><span class="item-price">$4.25</span></div>
      <div class="menu-item"><span class="item-name">Cardamom Morning Bun</span><span class="item-price">$4.50</span></div>
    </div>
  </div>

  <div class="promo-banner">
    <h2>Opening Week Offer: Free Pastry with any Specialty Drink!</h2>
    <p>Show this flyer or mention code <strong>'VELVET2026'</strong> at checkout. Valid through Sunday.</p>
  </div>

  <div class="footer">
    <strong>Open Daily 6:00 AM – 7:00 PM</strong>
    742 Evergreen Terrace, Downtown • @velvetbeanroastery
  </div>
</body>
</html>`,
  },
  {
    id: "real-estate",
    name: "Luxury Penthouse Listing",
    category: "Real Estate",
    format: "square",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
  body {
    background: #111111;
    color: #ffffff;
    width: 200mm;
    height: 200mm;
    padding: 20mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }
  .top-tag { font-size: 11px; letter-spacing: 4px; text-transform: uppercase; color: #d4af37; font-weight: 600; margin-bottom: 8px; }
  h1 { font-size: 38px; font-weight: 300; letter-spacing: -0.5px; line-height: 1.2; margin-bottom: 6px; }
  .price { font-size: 28px; font-weight: 600; color: #d4af37; margin-bottom: 20px; }

  .photo-frame {
    width: 100%;
    height: 180mm;
    background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(17,17,17,0.9) 100%), #262626;
    border-radius: 8px;
    display: flex;
    align-items: flex-end;
    padding: 25px;
    position: relative;
    border: 1px solid #333;
    overflow: hidden;
  }
  .photo-bg-sim {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: radial-gradient(circle at 70% 30%, #404040 0%, #1a1a1a 100%);
    z-index: 0;
  }
  .specs-overlay { position: relative; z-index: 1; width: 100%; display: flex; justify-content: space-between; align-items: flex-end; }
  .specs-list { display: flex; gap: 20px; font-size: 13px; color: #cccccc; margin-top: 10px; }
  .specs-list span strong { color: #ffffff; display: block; font-size: 16px; margin-top: 2px; }

  .agent-box {
    background: #1f1f1f;
    border: 1px solid #333;
    padding: 16px 20px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .agent-name { font-size: 15px; font-weight: 600; color: #fff; }
  .agent-agency { font-size: 12px; color: #888; }
  .contact-btn {
    background: #d4af37;
    color: #111;
    padding: 10px 20px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 4px;
    text-decoration: none;
  }
</style>
</head>
<body>
  <div>
    <div class="top-tag">Exclusive Listing • Downtown Skyline</div>
    <h1>The Apex Sky Villa, Penthouse 42B</h1>
    <div class="price">$3,850,000</div>
  </div>

  <div class="photo-frame">
    <div class="photo-bg-sim"></div>
    <div class="specs-overlay">
      <div>
        <p style="font-size: 13px; color: #d4af37; letter-spacing: 2px; text-transform: uppercase;">Panoramic Glass Walls & Private Rooftop Pool</p>
        <div class="specs-list">
          <span>Bedrooms<strong>3 Beds</strong></span>
          <span>Bathrooms<strong>3.5 Baths</strong></span>
          <span>Interior<strong>3,200 Sq.Ft.</strong></span>
        </div>
      </div>
    </div>
  </div>

  <div class="agent-box">
    <div>
      <div class="agent-name">Victoria Sterling</div>
      <div class="agent-agency">Elite Estates Global Luxury • Lic #98214</div>
    </div>
    <a href="#" class="contact-btn">Schedule Private Tour</a>
  </div>
</body>
</html>`,
  },
];
