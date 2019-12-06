function validates({category_name, group, authority_user}) {
  const errors = {};

  
  if(!category_name) {
    errors.category_name_blank = "Please enter category name";
  }

  if(!group) {
    errors.group_blank = "Please choose group";
  }

  if(authority_user.length === 0) {
    errors.authority_user_blank = "Please choose authority user";
  }

  return errors;
}

export { validates }