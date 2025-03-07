const httpsForce = `
<IfModule mod_rewrite.c>
   RewriteEngine On
   RewriteCond %{HTTPS} !=on
   RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
</IfModule>
`

const setHTTPS = (content, https) => https
    ? content.replace('### FORCE-HTTPS ###', httpsForce)
    : content

module.exports = setHTTPS