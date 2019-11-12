import React from "react";
import Select from "react-select";
import LinkImg from "./images.jpg";

class StudioLinkDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null
    };
  }
  componentDidMount() {
    this.setState({
      selectedOption: {
        label: this.props.selectedMedia.folder_name,
        value: this.props.selectedMedia.id
      }
    });
  }
  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  allFolderData() {
    const options =
      this.props.folderProjectData &&
      this.props.folderProjectData.map(element => ({
        label: element.folder_name,
        value: element.id
      }));
    return options;
  }

  render() {
    return (
      <div class="tab-pane container fade active" id="menu11">
        <div class="table-responsive two">
          <div class="form-group">
            <label for="project">Project Name</label>
            <Select
              value={this.state.selectedOption}
              onChange={this.handleChange}
              options={this.allFolderData()}
              className="form-control"
            />
          </div>
          <div class="form-group">
            <label for="email">Description</label>
            <textarea
              class="form-control"
              rows="5"
              id="comment"
              placeholder="Please Enter Description"
            ></textarea>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-sm-6 p-0">
                <label for="email">Thumbnail</label>
                <img src={LinkImg} class="img-w" />
                <div class="posterframe-btn-sec">
                  <input type="button" value="UPLOAD NEW" class="UPNEW" />
                  <input type="button" value="CURRENT FRAME" class="CRFR" />
                </div>
              </div>
              <div class="col-sm-6">
                <form action="/action_page.php">
                  <div class="form-group">
                    <a href="playerSettings.html">
                      <input
                        type="button"
                        name=""
                        value="Player Settings"
                        class="Player-Settings createnew-top"
                      />
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudioLinkDetails;
