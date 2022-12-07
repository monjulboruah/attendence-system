var base64ToImage = require("base64-to-image");
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs/promises");

const attendenceController = {
  getAttendence: async (req, res) => {
    try {
      const base64Data = req.body.base64Image.replace(
        /^data:image\/jpg;base64,/,
        ""
      );

      var optionalObj = { fileName: "test", type: "jpg" };

      var imageInfo = await base64ToImage(base64Data, "./testImage", optionalObj);

      const image = await fs.readFile("./testImage/test.jpg");
      const form = new FormData();

      form.append("file1", image, "test.jpg");

      const response = await axios.post(
        "http://127.0.0.1:5000/upload-test-image",
        form,
        {
          headers: {
            ...form.getHeaders(),
          },
        }
      );

      console.log(response.data);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500),
        json({
          msg: "Could not fetch attendence",
        });
    }
  },

  uploadTrainData: async(req, res) => {
    try {

      const arr = req.body.Images;
      const form = new FormData();
      const schId = req.body.schId;

      for(let i=0; i<arr.length; i++){
        const base64Data = arr[i].replace(
          /^data:image\/jpg;base64,/,
          ""
        );
        var optionalObj = { fileName: schId , type: "jpg" };
        var imageInfo = await base64ToImage(base64Data, "./trainImage", optionalObj);
        const image = await fs.readFile("./testImage/"+schId);
        form.append("file1", image, "test.jpg");
      }
      
      const response = await axios.post(
        "http://127.0.0.1:5000/upload-test-image",
        form,
        {
          headers: {
            ...form.getHeaders(),
          },
        }
      );

      console.log(response.data);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500),
        json({
          msg: "Could not fetch attendence",
        });
    }

  }
};

module.exports = attendenceController;
