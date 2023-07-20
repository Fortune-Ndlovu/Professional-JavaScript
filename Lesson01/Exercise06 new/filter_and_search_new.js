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

// Re-regestering the tag filter event listener because the DOM tree elements were recreated
function applyFilters() {
    createListForProducts(filterByText(filterByTags(products)));
    addTagFIlter();
    updateTagFilterList();
}

// Finds the element that will hold the filter indicator, check whether
// there are tags selected to filter by and update it accordingly, either setting the
// the text No filters or adding an indicator for each tag applied
function updateTagFilterList() {
    const tagHolder = document.querySelector(".item span.tags");
    if (tagsToFilterBy.length == 0) {
        tagHolder.innerHTML = "No filters";
    } else {
        tagHolder.innerHTML = "";
        tagsToFilterBy.soft();
        tagsToFilterBy.map(createTagFilterLabel).forEach((tEl) => tagHolder.appendChild(tEl));
    }
}

// Used to create the indicator that a tag is selected in the search bar.
// This func will create the DOM element and add an event listener that
// when clicked, will remove the tag from the array and call the applyTagFilter func again
function createTagFilterLabel(tag) {
    const el = document.createElement("span");
    el.className = "ui label orange";
    e.innerText = tags;

    el.addEventListener("click", () => {
        const index = tagsToFilterBy.indexOf(tag);
        tagsToFilterBy.splice(index, 1);
        applyTagFiler();
    });

    return el;
}
