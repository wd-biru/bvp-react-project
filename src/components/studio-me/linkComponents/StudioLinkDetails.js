import React from "react";
import Select from "react-select";
import LinkImg from "./images.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class StudioLinkDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      description: "",
      thumbImage: "",
      showToastMsg: false
    };
  }
  componentDidMount() {
    this.setState({
      selectedOption: {
        label: this.props.selectedMedia.folder_name,
        value: this.props.selectedMedia.id
      },
      description: this.props.selectedMedia.description,
      thumbImage: `https://apiv2.bossvideoplayer.com/public/${this.props.selectedMedia.thumbnail}`
    });
  }
  componentDidUpdate(prevProps) {
    const userId = localStorage.getItem("userId");
    const payload = {
      user_id: Number(userId)
    };
    if (
      prevProps.folderDetails !== this.props.folderDetails &&
      this.props.folderDetails.data.code === 200
    ) {
      toast.success(this.props.folderDetails.data.message);
      this.setState({
        showToastMsg: true
      });
      this.props.getUserFolderData(payload);
    } else if (
      prevProps.folderDetails !== this.props.folderDetails &&
      this.props.folderDetails.data.code !== 200
    ) {
      toast.error(this.props.folderDetails.data.message);
      this.setState({
        showToastMsg: true
      });
    }
  }
  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  allFolderData() {
    const options =
      this.props.isActiveObject &&
      this.props.isActiveObject.children.map(element => ({
        label: element.folder_name,
        value: element.id
      }));
    return options;
  }

  saveStudioDetails = () => {
    const userId = Number(localStorage.getItem("userId"));
    const selectedFile = document.getElementById("files").files[0];
    // let formData = new FormData(this.formRef);
    const formData = new FormData();
    formData.append("thumbnail", selectedFile || this.state.thumbImage);
    formData.append("user_id", userId);
    formData.append("folder_id", this.state.selectedOption.value);
    formData.append("folder_name", this.state.selectedOption.label);
    formData.append("description", this.state.description);
    formData.append("action", "description");
    // const payload = {
    //   user_id: userId,
    //   folder_id: this.state.selectedOption.value,
    //   folder_name: this.state.selectedOption.label,
    //   description: this.state.description,
    //   thumbnail: selectedFile,
    //   action: "description"
    // };
    this.props.createFolderData(formData);
  };

  onChange(event) {
    this.setState({
      thumbImage: URL.createObjectURL(event.target.files[0])
    });
  }

  render() {
    return (
      <>
        <div className="tab-content1">
          <div class="tab-pane container fade active" id="menu11">
            <div class="table-responsive two">
              <form>
                <div className="form-group">
                  <label for="project">Project Name</label>
                  <Select
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                    options={this.allFolderData()}
                    className="form-control select-value"
                  />
                </div>
                <div className="form-group">
                  <label for="email">Description</label>
                  <textarea
                    class="form-control"
                    rows="5"
                    id="description"
                    name="description"
                    value={this.state.description}
                    placeholder={
                      this.props.selectedMedia.description === null &&
                      "Please Enter Description"
                    }
                    onChange={this.handleInputChange}
                  ></textarea>
                </div>
              </form>

              <div class="container">
                <div class="row">
                  <div class="col-sm-6 p-0">
                    <label for="email">Thumbnail</label>
                    <img src={this.state.thumbImage} class="img-w" />
                    <div class="posterframe-btn-sec">
                      <label for="files" class="UPNEW">
                        UPLOAD NEW
                      </label>
                      <input
                        id="files"
                        type="file"
                        name="myImage"
                        accept="image/x-png,image/gif,image/jpeg"
                        class="hidden"
                        onChange={() => this.onChange(event)}
                      />
                      <input type="button" value="CURRENT FRAME" class="CRFR" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        type="button"
                        name=""
                        value="Player Settings"
                        class="Player-Settings createnew-top"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        type="button"
                        name=""
                        value="Save"
                        class="Player-Settings createnew-top"
                        onClick={this.saveStudioDetails}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.showToastMsg && <ToastContainer autoClose={1500} />}
      </>
    );
  }
}

export default StudioLinkDetails;
