import { dashboard_create, headerCreate } from "../../modules/ui";
import { user } from "../../modules/user";

headerCreate();
dashboard_create(user);