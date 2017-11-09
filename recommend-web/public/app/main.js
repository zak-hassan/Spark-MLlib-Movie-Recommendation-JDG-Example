//PatternFly JS Dependencies Entry

//jQuery
//execute files in global context with script-loader: https://github.com/webpack/script-loader
import 'script-loader!../node_modules/jquery/dist/jquery.min';

//Bootstrap JS
import '../node_modules/bootstrap/dist/js/bootstrap.min';


//Datatables, jQuery Grid Component (Must occur before patternfly*.js)
import '../node_modules/datatables.net/js/jquery.dataTables';
import '../node_modules/datatables.net-colreorder/js/dataTables.colReorder';

//Patternfly JS
import '../node_modules/patternfly/dist/js/patternfly.min.js';

//Patternfly Pagination
import '../node_modules/patternfly/dist/js/patternfly.dataTables.pfPagination.js';


//Bootstrap Combobox
import '../node_modules/patternfly-bootstrap-combobox/js/bootstrap-combobox';

//Bootstrap Select
import '../node_modules/bootstrap-select/dist/js/bootstrap-select.min';

//Bootstrap Touchspin
import '../node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min';


//Google Code Prettify - Syntax highlighting of code snippets
import '../node_modules/google-code-prettify/bin/prettify.min';
