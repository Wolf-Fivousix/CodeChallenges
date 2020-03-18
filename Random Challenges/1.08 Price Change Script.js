// FrontEnd Challange
// ========================================
// Javascript & jQuery
// Write a script to auto-select and change the price of all apps to $100 under section  “Extra Integrations” on page https://www.odoo.com/pricing

document.getElementsByClassName("openerp_enterprise_pricing_step_body")[2].childNodes[1].childNodes
// Will get the correct div, but there is no unique class identifier for all elements that needs to be changed.