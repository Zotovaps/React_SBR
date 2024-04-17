const data = {
    tree: [
        {
            name: 'name1',
            tree_1: [
                {name: 'name2'},
                {name: 'name3'},
                {
                    name: 'name4',
                    tree_2: [
                        {name: 'name5'},
                        {name: 'name6'},
                        {
                            tree_3: [
                                {name: undefined},
                                {name: 'name7', age: 20},
                                {name: 'name8', age: 15},
                                {name: 'name9', age: 31},
                                {name: 'name10', age: 30},
                                {name: undefined, age: undefined},
                                {name: 'empty', age: 'empty'},
                            ],
                        },
                    ],
                },
                {name: 'name11'},
            ],
        },
        {
            name: 'name12',
            tree_4: [{name: 'name3'}],
        },
    ],
};

function myFunction(data, target) {
    let result = false;
    if (data[target]) return data[target];

    const keys = Object.keys(data).filter(x => x.includes("tree"));

    keys.some(key => {
        return data[key].some(field => {
            result = myFunction(field, target) ?? false;

            return result;
        })
    })

    return result;
}

function nameSort(a, b) {
    // "name".length = 4
    return parseInt(b.name.substring(4)) - parseInt(a.name.substring(4))
}

function nameFilter(item) {
    return !!item.name && item.name !== "empty";
}

let nodeValue = myFunction(data, "tree_3").filter(nameFilter).sort(nameSort);

console.log(nodeValue);