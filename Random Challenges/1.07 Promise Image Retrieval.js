// FrontEnd Challange
// ========================================
// Write a javascript that uses the following below to get the Odoo logo at https://odoocdn.com/openerp_website/static/src/img/assets/png/odoo_logo.png
// Logging the result data in the console is fine for output, you do not have to show/render the logo anywhere.

function request(method, url) {
        return new Promise(function (resolve, reject) {
                    var xml_req = new XMLHttpRequest();
                    xml_req.open(method, url);
            xml_req.onload = () => resolve(xml_req);
            xml_req.onerror = () => reject(xml_req);
            xml_req.send();
        })
        .then(response => console.log(response.getElementsByTagName("img")[0].src));
}

// Need some TDD here to see if this actually works.