# Add new Plex server

## Add Claim to compose file

Go to https://www.plex.tv/claim/ and sign in.
Copy the claim token (it starts with claim- and is only valid for a few minutes).

Add to environments variables PLEX_CLAIM=claim-xxxxx

Go to http://192.168.178.X:32400/web.