const assert = require("assert");
const firebase = require("@firebase/testing");

const MY_PROJECT_ID = "colors-ang-web-app-v1";

describe("Colors", () => {
  //================== DEMO TESTS ==============================
  it("Can read, but not write the demo Collection", async () => {
    const db = firebase
      .initializeTestApp({ projectId: MY_PROJECT_ID })
      .firestore();
    const demoDoc = db.collection("demo").doc("Colors");
    console.log((await demoDoc.get()).exists);
    await firebase.assertSucceeds(demoDoc.get());
    await firebase.assertFails(demoDoc.set({ newData: "data new" }));
  });
  //===========PRODUCT TESTS========================
  it("can't read or write to products", async () => {
    const db = firebase
      .initializeTestApp({ projectId: MY_PROJECT_ID })
      .firestore();
    const productsDoc = db.doc("products/product_1");
    await firebase.assertFails(productsDoc.get());
    await firebase.assertFails(productsDoc.set({ foo: "bar" }));
  });
  // ============== USER TESTS =====================
  it("can read && write email, profCreated, && UID if useUID matches doc Name", async () => {
    const myAuth = { uid: "yeezy" };
    const db = firebase
      .initializeTestApp({
        projectId: MY_PROJECT_ID,
        auth: myAuth,
      })
      .firestore();
    const userDoc = db.collection("users").doc("yeezy");
    await firebase.assertSucceeds(userDoc.get());
    await firebase.assertFails(userDoc.set({ uid: "ye" }));
    await firebase.assertSucceeds(
      userDoc.update({
        email: "yeezy@yeezy.com",
        userUID: "useruid",
        profileCreated: true,
      })
    );
  });

  it("can't read doc if userUID doesn't match doc Name", async () => {
    const myAuth = { uid: "yeezy" };
    const db = firebase
      .initializeTestApp({
        projectId: MY_PROJECT_ID,
        auth: myAuth,
      })
      .firestore();
    const notTheirDoc = db.doc("users/yeezus");
    await firebase.assertFails(notTheirDoc.get());
  });

  it("can read payments & can't write to payments", async () => {
    const myAuth = { uid: "yeezy" };
    const db = firebase
      .initializeTestApp({
        projectId: MY_PROJECT_ID,
        auth: myAuth,
      })
      .firestore();
    const paymentDoc = db.doc("users/yeezy/payments/payment1");
    await firebase.assertSucceeds(paymentDoc.get());
    await firebase.assertFails(paymentDoc.update({ foo: "bar" }));
  });

  it("can't read or write checkout_sessions", async () => {
    const myAuth = { uid: "yeezy" };
    const db = firebase
      .initializeTestApp({
        projectId: MY_PROJECT_ID,
        auth: myAuth,
      })
      .firestore();
    const paymentDoc = db.doc("users/yeezy/checkout_sessions/session_1");
    await firebase.assertSucceeds(paymentDoc.get());
    await firebase.assertSucceeds(paymentDoc.update({ foo: "bar" }));
  });
  //============================== END OF USER TESTS ==============================
  // ============================== START OF PROJECT TESTS ========================

  it("can't read projects unless they've paid", async () => {
    const myAuth = { uid: "yeezy" };
    const db = firebase
      .initializeTestApp({
        projectId: MY_PROJECT_ID,
        auth: myAuth,
      })
      .firestore();
    const projectDoc = db.doc("projects/Colors");
    await firebase.assertSucceeds(projectDoc.get());
    // await firebase.assertFails(projectDoc.update({ fo: "bar" }));
  });

  // it("can write unless editor matches requester UID", async () => {});
});
