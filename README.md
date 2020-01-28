# React widget


### Installation

- install global: git, nodejs, yarn
- clone project
- yarn

### Build bundle
- yarn build
- copy bundle.js from dist to a cdn
- insert into (example in index.html)
    <script src="src from cdn" type="text/javascript"></script>
    <script type="text/javascript">
        CartWidget.init("widget container id");
    </script>
    
### Run locally
- yarn dev


