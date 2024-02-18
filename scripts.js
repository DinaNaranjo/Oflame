document.addEventListener("DOMContentLoaded", function() {
    // Simulación de carga de blogs más populares
    setTimeout(function() {
        var popularBlogs = [
            {
                title: "Blog 1",
                image: "https://via.placeholder.com/600",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                rating: 4.5,
                categories: ["Categoría 1", "Categoría 2"],
                tags: ["Tag 1", "Tag 2"]
            },
            {
                title: "Blog 2",
                image: "https://via.placeholder.com/600",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                rating: 4.5,
                categories: ["Categoría 1", "Categoría 2"],
                tags: ["Tag 1", "Tag 2"]
            },
            {
                title: "Blog 3",
                image: "https://via.placeholder.com/600",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                rating: 4.5,
                categories: ["Categoría 1", "Categoría 2"],
                tags: ["Tag 1", "Tag 2"]
            }
        ];

        var popularBlogsContainer = document.getElementById("popular-blogs");

        popularBlogs.forEach(function(blog) {
            var card = document.createElement("div");
            card.classList.add("col-md-4");
            card.innerHTML = `
                <div class="card mb-4">
                    <img src="${blog.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${blog.title}</h5>
                        <p class="card-text">${blog.text}</p>
                        <div class="rating">
                            ${Array.from({ length: Math.floor(blog.rating) }, () => `<i class="fas fa-star"></i>`).join("")}
                            ${blog.rating % 1 !== 0 ? `<i class="fas fa-star-half-alt"></i>` : ""}
                        </div>
                        <div class="categories">
                            ${blog.categories.map(category => `<a href="#" class="badge bg-primary">${category}</a>`).join("")}
                        </div>
                        <div class="tags">
                            ${blog.tags.map(tag => `<a href="#" class="badge bg-secondary">${tag}</a>`).join("")}
                        </div>
                        <a href="#" class="btn btn-primary read-more">Leer más</a>
                    </div>
                </div>
            `;

            popularBlogsContainer.appendChild(card);
        });

        // Buscador
        var searchInput = document.querySelector('.form-control');
        var searchButton = document.querySelector('.btn-primary');

        searchButton.addEventListener('click', function() {
            var searchTerm = searchInput.value.toLowerCase();

            var filteredBlogs = popularBlogs.filter(function(blog) {
                return blog.title.toLowerCase().includes(searchTerm) || blog.text.toLowerCase().includes(searchTerm);
            });

            popularBlogsContainer.innerHTML = '';

            filteredBlogs.forEach(function(blog) {
                var card = document.createElement("div");
                card.classList.add("col-md-4");
                card.innerHTML = `
                    <div class="card mb-4">
                        <img src="${blog.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${blog.title}</h5>
                            <p class="card-text">${blog.text}</p>
                            <div class="rating">
                                ${Array.from({ length: Math.floor(blog.rating) }, () => `<i class="fas fa-star"></i>`).join("")}
                                ${blog.rating % 1 !== 0 ? `<i class="fas fa-star-half-alt"></i>` : ""}
                            </div>
                            <div class="categories">
                                ${blog.categories.map(category => `<a href="#" class="badge bg-primary">${category}</a>`).join("")}
                            </div>
                            <div class="tags">
                                ${blog.tags.map(tag => `<a href="#" class="badge bg-secondary">${tag}</a>`).join("")}
                            </div>
                            <a href="#" class="btn btn-primary read-more">Leer más</a>
                        </div>
                    </div>
                `;

                popularBlogsContainer.appendChild(card);
            });
        });
    }, 1000);
});
