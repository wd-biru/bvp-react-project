import * as React from "react";
import * as ReactDOM from "react-dom";

import './Accordion.css';

import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-react-navigations';
class ReactApp extends React.Component {
    render() {
       
        return (<AccordionComponent expanding={this.expanding.bind(this)}
         ref={acrdn => this.acrdnInstance = acrdn}>
        
            <AccordionItemsDirective>
              <AccordionItemDirective header='Music' content='<div id="nested_music"></div>'/>
            </AccordionItemsDirective>
        </AccordionComponent>
        
        );
    }
    nestedExpand(e) {
        if (e.element.querySelectorAll('.e-accordion').length > 0) {
            return;
        }
        ReactDOM.render(<AccordionComponent>
            <AccordionItemsDirective>
              <AccordionItemDirective header='New Track1'/>
              <AccordionItemDirective header='New Track2'/>
              <AccordionItemDirective header='Music Newbb' content='<div id="nested_musicNewbb"></div>'/>
            </AccordionItemsDirective>
        </AccordionComponent>, document.getElementById("nested_musicNew"));
    }

    expanding(e) {
        
            if (e.element.querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            ReactDOM.render(<AccordionComponent expanding={this.nestedExpand}>
            <AccordionItemsDirective>
              <AccordionItemDirective header='Music Track1'/>
              <AccordionItemDirective header='Music Track2'/>
              <AccordionItemDirective header='Music New' content='<div id="nested_musicNew"></div>'/>
            </AccordionItemsDirective>
        </AccordionComponent>, document.getElementById("nested_music"));
        }
       
    }

export default ReactApp;