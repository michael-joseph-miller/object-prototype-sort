# object-prototype-sort<!-- omit in toc -->

Sort an object by key or value<!-- omit in toc -->

[Report Bug][bug] | [Request Features][features]

---

## Table of Contents<!-- omit in toc -->

- [Install](#install)
- [Import](#import)
- [Syntax](#syntax)
- [Parameters](#parameters)
- [Return value](#return-value)
- [License](#license)
- [Contact](#contact)

---

## Install

```sh
npm i object-to-sorted-array
```

## Import

```js
import sortObj from 'object-to-sorted-array';
```

## Syntax

```js
sortObj(object);

sortObj(object[, sortBy])

sortObj(object[, sortBy[, sortOrder]])
```

## Parameters

- **object**

  - object to de sorted

- **sortBy** `(optional)`

  - "key" | "value"
  - sort by the objects keys or values

- **order** `(optional)`
  - "ascending" | "descending"
  - sort in ascending or descending order

## Return value

- Returns an array of sorted key/value pair arrays
  - `[['key', 'value'], ...]`

---

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

<!-- CONTACT -->

## Contact

Project Link: <https://github.com/michael-joseph-miller/object-prototype-sort>

<!-- LINKS & IMAGES -->

[bug]: https://github.com/michael-joseph-miller/object-to-sorted-array/issues
[features]: https://github.com/michael-joseph-miller/object-to-sorted-array/issues
