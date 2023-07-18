const tagsToFilterBy = [];
let textToSearch = "";

function AddFilterTags() {
    Array.from(document.querySelectorAll(".extra .label")).forEach((tagEl) => {
        tagEl.addEventListener("click", () => {
            
            if (!tagsToFilterBy.includes(tagEl.innerHTML)) {
                tagsToFilterBy.push(tagEl.innerHTML);
                applyFIlters();
            }
        });
    });
}