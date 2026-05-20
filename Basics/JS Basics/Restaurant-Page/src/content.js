const home = () => {
    const content = document.getElementById('content');
    content.replaceChildren();

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Baratie!';

    const intro = document.createElement('div');
    intro.textContent = "Baratie has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";

    const hours = document.createElement('div');
    hours.innerHTML = "Sunday: 8am - 8pm <br>Monday: 6am - 6pm<br>Tuesday: 6am - 6pm<br>Wednesday: 6am - 6pm<br>Thursday: 6am - 10pm<br>Friday: 6am - 10pm<br>Saturday: 8am - 10pm";

    const location = document.createElement('div');
    location.textContent = "123 Forest Drive, Forestville, Maine";

    content.appendChild(heading);
    content.appendChild(intro);
    content.appendChild(hours);
    content.appendChild(location);
}

const menu = () => {
    const content = document.getElementById('content');
    content.replaceChildren();

    const heading = document.createElement('h1');
    heading.textContent = 'Baratie Breakfast Menu';

    const pancakes = document.createElement('div');
    pancakes.innerHTML = "<h3>Pancakes</h3>A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.";

    const french_toast = document.createElement('div');
    french_toast.innerHTML = "<h3>French Toast</h3>Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.";

    const veggie_sandwich = document.createElement('div');
    veggie_sandwich.innerHTML = "<h3>Veggie Sandwich</h3>Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.";

    content.appendChild(heading);
    content.appendChild(pancakes);
    content.appendChild(french_toast);
    content.appendChild(veggie_sandwich);
}


const about = () => {
    const content = document.getElementById('content');
    content.replaceChildren();

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';

    const head_chef = document.createElement('div');
    head_chef.innerHTML = "<h2>Owner Zeff</h2>Head Chef<br>555-555-5554<br>totallyRealEmail@notFake.com";

    const sous_chef = document.createElement('div');
    sous_chef.innerHTML = "<h2>Vinsmoke Sanji</h2>Sous Chef<br>555-555-5554<br>totallyRealEmail@notFake.com";

    content.appendChild(heading);
    content.appendChild(head_chef);
    content.appendChild(sous_chef);
}


export { home, menu, about };