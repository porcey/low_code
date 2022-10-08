export default function (that) {
    let myId = that.$attrs.id;
    let curID = that.$store.state.curComponent.id;
    return myId === curID
}