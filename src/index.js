import { application, router } from "taskerjs";

router.enter("Power:Changed", context => {
  context.tasker.flash("Hello world");
});
application.use(router.routes());

application.run();
