import React, { Component } from 'react';

class shop extends Component {
  render () {
    return (
      <>
        {/* <!-- Button trigger modal --> */}
        <button type="button" className="clientCard-actions--shop" data-bs-toggle="modal" data-bs-target="#shopModal">
          <i className="fas fa-store"></i>
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="shopModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="shopModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-fullscreen-md-down">
            <div className="modal-content bs_overlay">
              <div className="modal-header">
                <h5 className="modal-title" id="shopModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body ">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default shop;