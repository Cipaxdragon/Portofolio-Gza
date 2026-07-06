# Diagram Arsitektur Aplikasi - Portfolio Gali

Dokumen ini berisi visualisasi dari arsitektur aplikasi portofolio ini.

## 1. High-Level Architecture (Alur Sistem Keseluruhan)

```mermaid
graph TD
    User(User Browser)
    
    subgraph Vercel
        NextJS[Next.js App Server-Side]
    end
    
    subgraph Application
        Router[App Router]
        UI[UI Components]
        Data[Static Data JSON]
        Utils[Utility Functions]
    end
    
    subgraph ThirdParty
        EmailJS[EmailJS API Contact]
        Recruiter[Email Penerima Gali]
    end

    User -->|Akses Website| Vercel
    Vercel -->|Serve HTML| User
    
    Vercel -.->|Render| Router
    Router --> UI
    Router --> Data
    UI --> Utils
    
    User -->|Submit Form| EmailJS
    EmailJS -->|Notifikasi| Recruiter
```

---

## 2. Struktur Komponen (Component Hierarchy)

```mermaid
graph TD
    Root[app/layout.js]
    Page[app/page.js]
    Nav[Navbar Component]
    Footer[Footer Component]
    
    subgraph Sections
        Hero[Hero Section]
        About[About Section]
        Portfolio[Projects Section]
        Experience[Experience Section]
        Contact[Contact Form Section]
    end
    
    subgraph UIElements
        Button(Button)
        Card(ProjectCard)
        Badge(SkillBadge)
        Input(Input Form)
    end
    
    Root --> Nav
    Root --> Page
    Root --> Footer
    
    Page --> Hero
    Page --> About
    Page --> Portfolio
    Page --> Experience
    Page --> Contact
    
    Portfolio --> Card
    Experience --> Badge
    Contact --> Input
    Contact --> Button
    Hero --> Button
```

---

## 3. Alur Pengembangan & CI/CD (Deployment Flow)

```mermaid
sequenceDiagram
    participant Dev as Developer
    participant Git as GitHub
    participant Vercel as Vercel
    participant Web as Live Website

    Dev->>Git: Push kode terbaru
    Git-->>Vercel: Trigger Webhook
    
    Vercel->>Vercel: npm install
    Vercel->>Vercel: npm run build
    Vercel->>Vercel: Generate Static Pages
    
    Vercel->>Web: Deploy
    Web-->>Dev: Website Live
```
