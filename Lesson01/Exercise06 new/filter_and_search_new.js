const tagsToFilterBy = [];
let textToSearch = "";

// func to add all the tags in the page
function AddFilterTags() {
    Array.from(document.querySelectorAll(".extra .label")).forEach((tagEl) => {
        tagEl.addEventListener("click", () => {

            if (!tagsToFilterBy.includes(tagEl.innerHTML)) {
                tagsToFilterBy.push(tagEl.innerHTML);
                applyFilters();
            }
        });
    });
}

// catch all func that will contain all the logic related to updating the page
function applyFilters() {
    createListForProducts(filterByText(filterByTags(products)));
    addTagFilter();
    updateTagFilterList();
}

// func to handle the events on the input box for the text search
function addTextSearchFilter() {
    document.querySelector(".menu .right input".addEventListener("keyup", (e) => {
        textToSearch = e.target.value;
        applyFilters();
    }));
}

// func to filter the list of products using the tagsToFilterBy array.
function filterByTags() {
    let filtered = products;
    tagsToFilterBy.forEach(() => filtered = filtered.filter(p => p.tags.includes(t)));
    return filtered;
}

// transforms all text to lowercase before comparing
function filterByText(products) {
    const txt = (textToSearch || "").toLowerCase();
    return products.filter((p) => {
        return p.name.toLowerCase().includes(txt);
    });
}

