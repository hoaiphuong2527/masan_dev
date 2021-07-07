server {
        listen 80;
        server_name bwidjsc.com www.bwidjsc.com;

   # if ($host = www.bwidjsc.com) {
   #     return 301 https://$host$request_uri;
   # } # managed by Certbot


   # if ($host = bwidjsc.com) {
   #     return 301 https://$host$request_uri;
   # } # managed by Certbot

        root /var/www/bwid.com/public_html/public;
        index index.php index.html index.htm;
        location /html { rewrite ^/html(.*)$ $1 last; }
        location / {
                try_files $uri $uri/ /index.php?$args;
        }

        location ~ \.php$ {
                try_files $uri =404;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
                fastcgi_index index.php;
                fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
                include fastcgi_params;
        }

        location /wp-content/uploads/{
            location ~ \.php$ {
                    deny all;
                }
        }

        #location ~ \.php$ {
        #       proxy_pass http://123.30.108.156:8080;
        #       proxy_set_header Host $host;
        #       proxy_set_header X-Real-IP $remote_addr;
        #       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        #       proxy_set_header X-Forwarded-Proto $scheme;
        #}

        #location ~ /\. {
        #       deny all;
        #}
        location /nginx_status {
          stub_status on;
          access_log   off;
          allow 113.161.88.94;
          allow 118.69.191.239;
          deny all;
       }
#	return 301 https://$server_name$request_uri;
}
