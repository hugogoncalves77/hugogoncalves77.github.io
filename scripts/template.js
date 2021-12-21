function renderPeople(data) {
    let htmlString = '';

    Object.entries(data).forEach(([department, categories]) => {
        htmlString += `<h1>${department}</h1><dl>`;
        Object.entries(categories).forEach(([category, people]) => {
            if (category !== '') {
                htmlString += `<dt>${category}</dt><br/>`;
            }
            Object.entries(people).forEach(([name, picture]) => {
                htmlString += `<dd>${name}<div class="person"><img src="img/people/${picture}"/></div></dd>`;
            });
        });
        htmlString += '</dl>';
    });

    $('#before_people').after(htmlString);
}
