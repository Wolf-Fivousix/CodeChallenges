Packaging Problem :
- The following are the Products and packaging boxes information of Acme Inc.
- Each product in given dictionary/hash contain possible packing boxes that can be used to ship the product when ordered 
- Each packaging box gives you how many numbers of the given product can be packed in the box.
- Packing box names are just reference names, they are not dimension of the packing box
products = {
   'IoT Box': {
       '20 x 20 x 12': 16.0,
       '16 x 16 x 16': 9.0,
       '8 x 8 x 8': 4.0,
   },
   'Scale-Up! The Business Game': {
       '16 x 16 x 16': 7.0,
       '10 x 8 x 6': 3.0,
       '23 x 17 x 12': 14.0,
   },
   'Basic Cash Drawer': {},
}
-Following are order details with an order number, the ordered products  and  their initial demand of quantity by customer 
orders = {
   'S0101': {
       'IoT Box': 24.0,
       'Scale-Up! The Business Game': 58.0,
       'Basic Cash Drawer': 3.0,
   },
   'S0102': {
       'IoT Box': 2.0,
       'Scale-Up! The Business Game': 10.0,
   },
   'S0103': {
       'IoT Box': 15.0,
       'Scale-Up! The Business Game': 35.0,
       'Basic Cash Drawer': 10.0,
   },
}
Write a program/script to find and return the best and least possible packing boxes to be used for shipping the ordered products in an order.
Also, each box should give a count of product quantity to be packed in the selected boxes.
Expected Output : 
packed_orders = {
   'S0101': {
       'IoT Box': [('20 x 20 x 12', 16.0),('16 x 16 x 16', 8.0)],
       'Scale-Up! The Business Game': [(),...],
    },
   'S0103': {
       'Basic Cash Drawer': [],
   },
}
=================================
Start Time : 2020-03-31 16:08:00
End Time   : 2020-03-31 16::
=================================
Your solution goes after this
=================================
// create an empty hash.
// Iterate through my orders, and grab each order object.
// For each OO => we will iterate through product orders and figure out the boxes.
// PackagingFunction().
// For each key => return of our fuction.
// return the result hash.
// PackagingFunction( n) 
// variable maxKey.
// variable boxes array.
// Decrease the N, repeat until N is 0
// Iterate through product keys.
    // For each key, if it greater than maxKey, save this greater key. (as long as ammount left)
// Push the key and value/size to the array.

//  'Scale-Up! The Business Game': 35.0,
//    'Scale-Up! The Business Game': {
//        '16 x 16 x 16': 7.0,
//        '10 x 8 x 6': 3.0,
//        '23 x 17 x 12': 14.0,
       
// [23, 23, 16]
// 35 - 14 = 21
// 21 - 14 = 7
// 7 - 7 = 0

function packageOrder(products, orders) {
    let packageOrders = {};
    const orderObject = Object.keys(orders);
    orderObject.forEach(order => {
        let resultOrders = {};
        const productOrders = Object.key(order);
        productOrders.forEach( product => 
             resultOrders[product] = packagingFunction(product, orders[order][product]);
        );
        packageOrders[order] = resultOrders;
    });
    return packageOrders;
}

function packagingFunction(key, N) {
    let maxKey = "";
    let maxValue = 0;
    let boxesArray = [];
    while (N > 0) {
        cost boxes = Object.keys(key);
        boxes.forEach(box => {
            if (key[box] > maxValue && key[box] <= N) {
                maxKey = key;
                maxValue = key[box];
                }
            });
            boxesArray.push(`(${key}, ${key[maxKey]})`);
        }
    return boxesArray;
}

// Ran out of time. There are some issues here. The keying into each hash is probably wrong.
// The output is not formated correctly. I did it super quickly on the very end. Not everything should be a string.