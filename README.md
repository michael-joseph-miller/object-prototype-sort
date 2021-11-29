# object-prototype-sort<!-- omit in toc -->

Adds sort method to Object.prototype<!-- omit in toc -->

[Report Bug][bug] | [Request Features][features]

---

## Table of Contents<!-- omit in toc -->

- [Installation](#installation)
- [Usage](#usage)
- [Args](#args)
- [License](#license)
- [Contact](#contact)

---

## Installation

```sh
npm i object-prototype-sort
```

## Usage

1. Import the component you would like to use into the appropriate file.

   ```js
   require('object-prototype-sort');
   ```

   ### OR

   ```js
   import 'object-prototype-sort';
   ```

2. Use that component in your react code.
   ```js
   myObj = myObj.sort(); // sort by deafult: "key" "ascending"
   ```

### Args

```js
myObj.sort(sortBy, order);

sortBy = 'key' | 'value'; // default: "key"
order = 'ascending' | 'descending'; // default: "ascending"
```

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Project Link: <https://github.com/michael-joseph-miller/object-prototype-sort>

<!-- LINKS & IMAGES -->

[bug]: https://github.com/michael-joseph-miller/object-prototype-sort/issues
[features]: https://github.com/michael-joseph-miller/object-prototype-sort/issues
[react]: https://reactjs.org
