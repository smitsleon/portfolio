# Dynamisch Project Systeem

## Overzicht

De portfolio gebruikt nu een dynamisch systeem om projectpagina's in te laden. In plaats van aparte HTML bestanden voor elk project, worden alle projecten geladen via één template met URL parameters.

## Hoe het werkt

### Bestanden

1. **`project-detail.html`** - De template pagina voor alle projecten
2. **`projects-data.json`** - Bevat alle projectdata (titels, afbeeldingen, beschrijvingen)
3. **`project-loader.js`** - JavaScript die de projectdata inlaadt op basis van URL parameter
4. **`work.html`** - Overzichtspagina met links naar projecten

### URL Structuur

Projecten worden geopend met URL parameters:
```
project-detail.html?id=receptenweb
project-detail.html?id=bestof-2024
project-detail.html?id=cajamarca
```

### Een nieuw project toevoegen

1. Open `projects-data.json`
2. Voeg een nieuw project object toe aan de `projects` array:

```json
{
  "id": "mijn-nieuw-project",
  "title": "Mijn Nieuw Project",
  "subtitle": "Korte beschrijving van het project",
  "category": "web",
  "description": "Uitgebreide beschrijving van het project",
  "images": [
    "../assets/images/mijn-project/image1.jpg",
    "../assets/images/mijn-project/image2.jpg"
  ]
}
```

3. Voeg een project card toe in `work.html`:

```html
<a class="project-card" data-category="web" href="project-detail.html?id=mijn-nieuw-project"
    aria-label="Bekijk project mijn-nieuw-project">
    <div class="card-image">
        <img src="assets/images/mijn-project/thumbnail.jpg" alt="mijn-nieuw-project thumbnail">
        <div class="card-overlay">
            <div class="overlay-content">
                <span class="project-category">Web Development</span>
                <h3>Mijn Nieuw Project</h3>
            </div>
        </div>
    </div>
    <div class="card-content">
        <div class="card-header">
            <h3 class="card-title">Mijn Nieuw Project</h3>
            <span class="card-category">Web Development</span>
        </div>
    </div>
</a>
```

### Voordelen

- ✅ **Minder code duplication** - Eén HTML template in plaats van 15+ aparte bestanden
- ✅ **Makkelijker te onderhouden** - Wijzigingen aan de layout hoef je maar op één plek door te voeren
- ✅ **Sneller projecten toevoegen** - Alleen JSON data toevoegen, geen nieuwe HTML pagina nodig
- ✅ **Consistentie** - Alle projectpagina's hebben automatisch dezelfde layout

### Oude Projectbestanden

De oude project HTML bestanden in de `projects/` map kunnen nu worden verwijderd, omdat ze vervangen zijn door het dynamische systeem. Je kan ze behouden als backup of verwijderen om de codebase op te schonen.

### Categorieën

Momenteel ondersteund:
- `web` - Web Development projecten
- `graphic` - Graphic Design projecten

Je kan meer categorieën toevoegen in de JSON en de filtering in `work.html` aanpassen.
