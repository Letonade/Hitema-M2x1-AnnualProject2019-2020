import React from 'react';

import Sidebar from '../../components/Common/Sidebar/Sidebar'
import Cards from '../../components/Common/Cards/Cards'

function AccueilJournalRows() {
  return (
    <div className="row mx-0">
    	<div className="py-5 col-md-12 col-lg-10 pt-4 px-4 bg-light shadow-sm">
    		<Cards/>
    	</div>
    	<div className="col-lg-2 d-none d-lg-block bg-light shadow-sm">
    		<Sidebar/>
    	</div>
    </div>
  );
}

export default AccueilJournalRows;
