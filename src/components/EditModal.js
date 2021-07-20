import React from "react";
import "../App.css";

function EditModal() {
  return (
    <>
      <form className="ui form">
        <div class="field">
          <label>First Name</label>
          <input type="text" name="first-name" placeholder="First Name" />
        </div>

        <div class="field">
          <label>Last Name</label>
          <input type="text" name="last-name" placeholder="Last Name" />
        </div>

        {/* <div class="field">
          <label>City</label>
          <input type="text" name="last-name" placeholder="Last Name" />
        </div> */}

        {/* <div class="field">
          <label>Country</label>
          <input type="text" name="last-name" placeholder="Last Name" />
        </div> */}

        <div class="two fields">
          <div class="field">
            <label>State</label>
            <select class="ui fluid dropdown">
              <option value="">State</option>
            </select>

            <div class="field">
              <label>Country</label>
              <div class="ui fluid search selection dropdown">
                <input type="hidden" name="country" />
                <i class="dropdown icon"></i>
                <div class="default text">Select Country</div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="field">
          <div className="ui checkbox">
            <input type="checkbox" tabindex="0" className="hidden" />
            <label>I agree to the Terms and Conditions</label>
          </div>
        </div> */}
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default EditModal;
