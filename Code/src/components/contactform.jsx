import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
    Grid,
    Typography,
    TextField,
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    DialogContentText,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import { compose } from "recompose";
import { withWindowConsumer } from "../contexts/window/consumer";
import { withFirebaseConsumer } from "../firebase/index";
import { v4 as uuidv4 } from "uuid";

const useStyles = () => ({
    contactform: {
        background: "white",
        border: "2px solid lightgray",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        minHeight: (props) => (props.width < props.limit ? "60vh" : "45vh"),
    },
});

const ContactForm = ({ classes, firebase }) => {
    const initialState = {
        name: "",
        email: "",
        topic: "",
        message: "",
        uuid: uuidv4(),
    };
    const [user, setUser] = useState(initialState);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addInfo = (infoType) => (event) =>
        setUser({ ...user, [infoType]: event.target.value });

    const sendInfoToDb = (uuid, info) => {
        handleClickOpen();
        firebase.doPushNewMessage(uuid, info);
    };
    const checkFields = () => {
        if (
            user.name.length > 0 &&
            user.email.length > 0 &&
            user.topic.length > 0 &&
            user.message.length > 0
        ) {
            const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            const match = user.email.match(regex);
            if (match) {
                return true;
            }
        }
        return false;
    };

    return (
        <Grid item xs={12} className={classes.contactform}>
            <Grid item xs={12}>
                <Typography color="primary" variant="h5">
                    İletişim Formu
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <TextField
                    id="outlined-basic"
                    label="İsim"
                    multiline
                    required
                    value={user.name}
                    InputLabelProps={{
                        style: { color: "#845EC2" },
                    }}
                    onChange={addInfo("name")}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="outlined-basic"
                    label="Konu"
                    multiline
                    required
                    value={user.topic}
                    InputLabelProps={{
                        style: { color: "#845EC2" },
                    }}
                    onChange={addInfo("topic")}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="outlined-basic"
                    label="Mail"
                    multiline
                    required
                    value={user.email}
                    InputLabelProps={{
                        style: { color: "#845EC2" },
                    }}
                    onChange={addInfo("email")}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="outlined-basic"
                    label="Mesaj"
                    multiline
                    value={user.message}
                    required
                    InputLabelProps={{
                        style: { color: "#845EC2" },
                    }}
                    onChange={addInfo("message")}
                />
            </Grid>
            <Grid item xs={12} md={7}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => sendInfoToDb(user.uuid, user)}
                    disabled={!checkFields()}
                >
                    Gönder
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="draggable-dialog-title"
                >
                    <DialogTitle
                        style={{ cursor: "move" }}
                        id="draggable-dialog-title"
                    >
                        <Typography color="primary" variant="h6">
                            Başarılı
                        </Typography>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Mesajınızı başarılı bir şekilde aldık. En kısa
                            sürede mail üzerinden sizlere dönüş sağlayacağız.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Pencereyi kapat
                        </Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        </Grid>
    );
};

export default compose(
    withFirebaseConsumer,
    withWindowConsumer,
    withStyles(useStyles)
)(ContactForm);
