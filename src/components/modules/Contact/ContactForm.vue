<template>
  <form>
      <div class="form__container">
        <div class="form__section">
          <label for="name">Name</label>
          <input type="text" name="name" id="name"/>
        </div>
        <div class="form__section">
          <label for="email">Email</label>
          <input type="text" name="email" id="email"/>
        </div>
        <div class="form__section">
          <label for="message">Message</label>
          <textarea name="message" id="message" class="h-32"></textarea>
        </div>
        <div class="w-full px-4">
          <button class="veedo__btn veedo__btn-primary w-full rounded-full py-2.5">Hallo</button>
        </div>
      </div>
  </form>
</template>