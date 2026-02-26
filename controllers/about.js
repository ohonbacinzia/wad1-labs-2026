'use strict';
import logger from "../utils/logger.js";
import employee from "../models/employee.js";

 const about= {
 createView(request, response) {
    logger.info("About page loading!");
    
    const viewData = {
      title: "About the Playlist app!",
      employee: employee.getempInfo()
    };
    
    //logger.debug(viewData);
    response.render('about', viewData);   
  },
};

export default about;


