document.getElementById('add-skill').addEventListener('click', function () {
  const newSkill = document.getElementById('new-skill').value;
  if (newSkill) {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.textContent = newSkill;
      document.getElementById('skills-list').appendChild(listItem);
      document.getElementById('new-skill').value = '';
  }
});