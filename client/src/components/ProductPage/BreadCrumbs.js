import React from 'react'
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import {Link} from 'react-router-dom';

function BreadCrumbs() {
    const routes = [
        { path: '/', breadcrumb: 'Homepage' },
        { path: '/products', breadcrumb: 'Products' },
      ]; 
    return (
        <div className="breadcrumbs">
        {breadcrumbs.map((breadcrumb, index) => (
            <span key={breadcrumb.key}>
              <Link className={this.props.match.url===breadcrumb.props.match.url ? 'active' :'asdasd'} to={breadcrumb.props.match.url}>
                {breadcrumb}
              </Link>
              {(index < breadcrumbs.length - 1) && <i> / </i>}
            </span>
          ))}  
        </div>
    )
}

withBreadcrumbs(routes)(BreadCrumbs)
