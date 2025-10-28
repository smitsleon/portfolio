// Project loader - Dynamically loads project data based on URL parameter
(function () {
  // Project data - inline to avoid CORS issues when opening locally
  const projectsData = {
    "projects": [
      {
        "id": "receptenweb",
        "title": "receptenweb",
        "subtitle": "Korte toelichting over het project in één of twee zinnen.",
        "category": "web",
        "description": "Vul hier een korte beschrijving in (context, doel en jouw rol).",
        "images": [
          "assets/images/receptenweb/recipewebsite-light.webp",
          "assets/images/receptenweb/recipewebsite-dark.webp"
        ]
      },
      {
        "id": "small-application",
        "title": "small-application",
        "subtitle": "Korte toelichting over het project in één of twee zinnen.",
        "category": "web",
        "description": "Vul hier een korte beschrijving in (context, doel en jouw rol).",
        "images": [
          "assets/images/small-application/small-application1.webp",
          "assets/images/small-application/small-application2.webp"
        ]
      },
      {
        "id": "boudewijn",
        "title": "boudewijn seapark quiz",
        "subtitle": "Korte toelichting over het project in één of twee zinnen.",
        "category": "web",
        "description": "Vul hier een korte beschrijving in (context, doel en jouw rol).",
        "images": [
          "assets/images/boudewijn/boudewijn-admin1.png",
          "assets/images/boudewijn/boudewijn-admin2.png",
          "assets/images/boudewijn/boudewijn-name.png",
          "assets/images/boudewijn/boudewijn-newname.png",
          "assets/images/boudewijn/boudewijn-question.png",
          "assets/images/boudewijn/boudewijn.png"
        ]
      },
      {
        "id": "no-planetb",
        "title": "no-planetb",
        "subtitle": "Korte toelichting over het project in één of twee zinnen.",
        "category": "graphic",
        "description": "Vul hier een korte beschrijving in (context, doel en jouw rol).",
        "images": [
          "assets/images/no-planetb/no-planet-b.webp",
          "assets/images/no-planetb/no-planet-b-1.webp",
          "assets/images/no-planetb/no-planet-b-2.webp",
          "assets/images/no-planetb/no-planet-b-small.webp"
        ]
      },
      {
        "id": "stam",
        "title": "stam",
        "subtitle": "Korte toelichting over het project in één of twee zinnen.",
        "category": "graphic",
        "description": "Vul hier een korte beschrijving in (context, doel en jouw rol).",
        "images": [
          "assets/images/stam/stam.webp",
          "assets/images/stam/stam-1.webp",
          "assets/images/stam/stam-2.webp",
          "assets/images/stam/stam-small.webp"
        ]
      },
      {
        "id": "bestof-2024",
        "title": "bestof-2024",
        "subtitle": "Korte toelichting over het project in één of twee zinnen.",
        "category": "graphic",
        "description": "Vul hier een korte beschrijving in (context, doel en jouw rol).",
        "images": [
          "assets/images/bestof-2024/bestof2024-small.webp",
          "assets/images/bestof-2024/bestof2024.webp",
          "assets/images/bestof-2024/bestof2024films.webp",
          "assets/images/bestof-2024/bestof2024tijdloze.webp"
        ]
      },
      {
        "id": "cajamarca",
        "title": "cajamarca",
        "subtitle": "Korte toelichting over het project in één of twee zinnen.",
        "category": "graphic",
        "description": "Vul hier een korte beschrijving in (context, doel en jouw rol).",
        "images": [
          "assets/images/graphic-design/cajamarca/front.png",
          "assets/images/graphic-design/cajamarca/mockup-koffie.png",
          "assets/images/graphic-design/cajamarca/mockup-koffie1.png"
        ]
      },
      {
        "id": "handelsbeurs",
        "title": "handelsbeurs",
        "subtitle": "Korte toelichting over het project in één of twee zinnen.",
        "category": "graphic",
        "description": "Vul hier een korte beschrijving in (context, doel en jouw rol).",
        "images": [
          "assets/images/graphic-design/handelsbeurs/cover.png",
          "assets/images/graphic-design/handelsbeurs/agenda-spread.png",
          "assets/images/graphic-design/handelsbeurs/david-bowie-spread.png",
          "assets/images/graphic-design/handelsbeurs/programma-spread.png",
          "assets/images/graphic-design/handelsbeurs/van-eyck-spread.png"
        ]
      },
      {
        "id": "humboldt-honing",
        "title": "humboldt-honing",
        "subtitle": "Korte toelichting over het project in één of twee zinnen.",
        "category": "graphic",
        "description": "Vul hier een korte beschrijving in (context, doel en jouw rol).",
        "images": [
          "assets/images/graphic-design/humboldt-honing/mockup-pot.webp",
          "assets/images/graphic-design/humboldt-honing/mockup-strandstoel.webp",
          "assets/images/graphic-design/humboldt-honing/sokken-mockup.webp"
        ]
      },
      {
        "id": "sn-trackers",
        "title": "sn-trackers",
        "subtitle": "Korte toelichting over het project in één or twee zinnen.",
        "category": "graphic",
        "description": "Vul hier een korte beschrijving in (context, doel en jouw rol).",
        "images": [
          "assets/images/graphic-design/sn-trackers/logo.png",
          "assets/images/graphic-design/sn-trackers/logo-bladje.png",
          "assets/images/graphic-design/sn-trackers/mockup.png"
        ]
      },
      {
        "id": "tagmag",
        "title": "tagmag",
        "subtitle": "Korte toelichting over het project in één of twee zinnen.",
        "category": "graphic",
        "description": "Vul hier een korte beschrijving in (context, doel en jouw rol).",
        "images": [
          "assets/images/graphic-design/tagmag/logo.png",
          "assets/images/graphic-design/tagmag/logo-billboard.png",
          "assets/images/graphic-design/tagmag/logo-fsm.png",
          "assets/images/graphic-design/tagmag/logo-gebouw.png",
          "assets/images/graphic-design/tagmag/logo-gra.png",
          "assets/images/graphic-design/tagmag/logo-jamielee.png",
          "assets/images/graphic-design/tagmag/logo-poster.png",
          "assets/images/graphic-design/tagmag/logo-tent.png",
          "assets/images/graphic-design/tagmag/logo-web.png"
        ]
      },
      {
        "id": "typo-poster",
        "title": "typo-poster",
        "subtitle": "Korte toelichting over het project in één of twee zinnen.",
        "category": "graphic",
        "description": "Vul hier een korte beschrijving in (context, doel en jouw rol).",
        "images": [
          "assets/images/graphic-design/typo-poster/front.webp",
          "assets/images/graphic-design/typo-poster/mockup-poster.webp",
          "assets/images/graphic-design/typo-poster/mockup-poster1.webp"
        ]
      },
      {
        "id": "jammin",
        "title": "jammin",
        "subtitle": "Korte toelichting over het project in één of twee zinnen.",
        "category": "graphic",
        "description": "Vul hier een korte beschrijving in (context, doel en jouw rol).",
        "images": [
          "assets/images/jammin/jammin-1.png",
          "assets/images/jammin/jammin-2.png"
        ]
      },
      {
        "id": "graduaat-programmeren",
        "title": "graduaat-programmeren",
        "subtitle": "Korte toelichting over het project in één of twee zinnen.",
        "category": "graphic",
        "description": "Vul hier een korte beschrijving in (context, doel en jouw rol).",
        "images": [
          "assets/images/graphic-design/graduaat-programmeren/finale-poster-wit.webp",
          "assets/images/graphic-design/graduaat-programmeren/finale-poster-zwart.webp",
          "assets/images/graphic-design/graduaat-programmeren/flyer-back.webp",
          "assets/images/graphic-design/graduaat-programmeren/flyer-front.webp",
          "assets/images/graphic-design/graduaat-programmeren/mockup-flyer-1.webp",
          "assets/images/graphic-design/graduaat-programmeren/mockup-flyer-3.webp",
          "assets/images/graphic-design/graduaat-programmeren/mockup-poster-2.webp",
          "assets/images/graphic-design/graduaat-programmeren/mockup-poster-3.webp"
        ]
      },
      {
        "id": "festival-loops",
        "title": "festival-loops",
        "subtitle": "Korte toelichting over het project in één of twee zinnen.",
        "category": "graphic",
        "description": "Vul hier een korte beschrijving in (context, doel en jouw rol).",
        "images": [
          "assets/images/graphic-design/festival-loops/front.png"
        ]
      },
      {
        "id": "super-sauvage",
        "title": "super-sauvage",
        "subtitle": "Korte toelichting over het project in één of twee zinnen.",
        "category": "graphic",
        "description": "Vul hier een korte beschrijving in (context, doel en jouw rol).",
        "images": [
          "assets/images/graphic-design/super-sauvage/folder-cover.png",
          "assets/images/graphic-design/super-sauvage/blackwave.png",
          "assets/images/graphic-design/super-sauvage/kwb.png",
          "assets/images/graphic-design/super-sauvage/thy.png",
          "assets/images/graphic-design/super-sauvage/zwangere-guy.png",
          "assets/images/graphic-design/super-sauvage/pagina1.png",
          "assets/images/graphic-design/super-sauvage/pagina2.png",
          "assets/images/graphic-design/super-sauvage/pagina3.png",
          "assets/images/graphic-design/super-sauvage/pagina4.png",
          "assets/images/graphic-design/super-sauvage/polsbandje.png",
          "assets/images/graphic-design/super-sauvage/tshirt-achterkant.png",
          "assets/images/graphic-design/super-sauvage/tshirt-voorkant.png",
          "assets/images/graphic-design/super-sauvage/tote_bag_mockup.png"
        ]
      }
    ]
  };

  // Get project ID from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');

  if (!projectId) {
    console.error('No project ID specified in URL');
    document.getElementById('project-title').textContent = 'Project niet gevonden';
    document.getElementById('project-subtitle').textContent = 'Geen project ID opgegeven in de URL.';
    return;
  }

  // Find the project with matching ID
  const project = projectsData.projects.find(p => p.id === projectId);

  if (!project) {
    console.error(`Project met ID "${projectId}" niet gevonden`);
    document.getElementById('project-title').textContent = 'Project niet gevonden';
    document.getElementById('project-subtitle').textContent = `Project met ID "${projectId}" bestaat niet.`;
    return;
  }

  // Update page title
  document.getElementById('page-title').textContent = `${project.title} - Leon Smits`;

  // Update header
  document.getElementById('project-title').textContent = project.title;
  document.getElementById('project-subtitle').textContent = project.subtitle;

  // Load images
  const galleryGrid = document.getElementById('gallery-grid');
  galleryGrid.innerHTML = ''; // Clear existing content

  project.images.forEach((imagePath, index) => {
    const figure = document.createElement('figure');
    figure.className = 'project-detail__gallery-item';
    figure.setAttribute('data-index', index);

    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = `${project.title} afbeelding ${index + 1}`;
    img.loading = 'lazy';
    img.className = 'project-detail__gallery-image';

    figure.appendChild(img);
    galleryGrid.appendChild(figure);
  });

  // Lightbox functionality
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const galleryItems = document.querySelectorAll('.project-detail__gallery-item');
  
  let currentImageIndex = 0;

  function openLightbox(index) {
    currentImageIndex = index;
    lightboxImage.src = project.images[currentImageIndex];
    lightboxImage.alt = `${project.title} afbeelding ${currentImageIndex + 1}`;
    lightboxCounter.textContent = `${currentImageIndex + 1} / ${project.images.length}`;
    lightbox.classList.add('lightbox--active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }

  function closeLightbox() {
    lightbox.classList.remove('lightbox--active');
    document.body.style.overflow = ''; // Restore scrolling
  }

  function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
    lightboxImage.src = project.images[currentImageIndex];
    lightboxImage.alt = `${project.title} afbeelding ${currentImageIndex + 1}`;
    lightboxCounter.textContent = `${currentImageIndex + 1} / ${project.images.length}`;
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % project.images.length;
    lightboxImage.src = project.images[currentImageIndex];
    lightboxImage.alt = `${project.title} afbeelding ${currentImageIndex + 1}`;
    lightboxCounter.textContent = `${currentImageIndex + 1} / ${project.images.length}`;
  }

  // Event listeners
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', showPreviousImage);
  lightboxNext.addEventListener('click', showNextImage);

  // Close on background click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('lightbox--active')) return;
    
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      showPreviousImage();
    } else if (e.key === 'ArrowRight') {
      showNextImage();
    }
  });
})();