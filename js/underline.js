window.addEventListener("load", function () {
  inView.threshold(1);
  inView.offset(150);

  inView("#title-0")
    .on("enter", () => {
      addUnderline(0);
    })
    .on("exit", () => {
      removeUnderline(0);
    });

  inView("#title-1")
    .on("enter", () => {
      addUnderline(1);
    })
    .on("exit", () => {
      removeUnderline(1);
    });
  inView("#title-2")
    .on("enter", () => {
      addUnderline(2);
    })
    .on("exit", () => {
      removeUnderline(2);
    });
  inView("#title-3")
    .on("enter", () => {
      addUnderline(3);
    })
    .on("exit", () => {
      removeUnderline(3);
    });
  inView("#title-4")
    .on("enter", () => {
      addUnderline(4);
    })
    .on("exit", () => {
      removeUnderline(4);
    });
  inView("#title-5")
    .on("enter", () => {
      addUnderline(5);
    })
    .on("exit", () => {
      removeUnderline(5);
    });
  inView("#title-6")
    .on("enter", () => {
      addUnderline(6);
    })
    .on("exit", () => {
      removeUnderline(6);
    });
  inView("#title-7")
    .on("enter", () => {
      addUnderline(7);
    })
    .on("exit", () => {
      removeUnderline(7);
    });
  inView("#title-8")
    .on("enter", () => {
      addUnderline(8);
    })
    .on("exit", () => {
      removeUnderline(8);
    });
  inView("#title-9")
    .on("enter", () => {
      addUnderline(9);
    })
    .on("exit", () => {
      removeUnderline(9);
    });
  inView("#title-10")
    .on("enter", () => {
      addUnderline(10);
    })
    .on("exit", () => {
      removeUnderline(10);
    });
  inView("#title-11")
    .on("enter", () => {
      addUnderline(11);
    })
    .on("exit", () => {
      removeUnderline(11);
    });
  inView("#title-12")
    .on("enter", () => {
      addUnderline(12);
    })
    .on("exit", () => {
      removeUnderline(12);
    });
  inView("#title-13")
    .on("enter", () => {
      addUnderline(13);
    })
    .on("exit", () => {
      removeUnderline(13);
    });
  inView("#title-14")
    .on("enter", () => {
      addUnderline(14);
    })
    .on("exit", () => {
      removeUnderline(14);
    });
  inView("#title-15")
    .on("enter", () => {
      addUnderline(15);
    })
    .on("exit", () => {
      removeUnderline(15);
    });
  inView("#title-16")
    .on("enter", () => {
      addUnderline(16);
    })
    .on("exit", () => {
      removeUnderline(16);
    });
  inView("#title-17")
    .on("enter", () => {
      addUnderline(17);
    })
    .on("exit", () => {
      removeUnderline(17);
    });
});

function addUnderline(i) {
  document.querySelector("#title-" + i).classList.add("expanded");
}

function removeUnderline(i) {
  document.querySelector("#title-" + i).classList.remove("expanded");
}
