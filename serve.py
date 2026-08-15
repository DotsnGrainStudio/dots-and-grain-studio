#!/bin/bash
python3 -c "
import http.server, socketserver, os
PORT = 3333
os.chdir('/Volumes/Extreme SSD/1_Identität/website')
class H(http.server.SimpleHTTPRequestHandler):
    def log_message(self, f, *a): print(f % a)
with socketserver.TCPServer(('', PORT), H) as h:
    print('Serving on http://localhost:3333')
    h.serve_forever()
"
