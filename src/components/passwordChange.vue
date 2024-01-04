<template lang="">
    <div>
        <form class="mx-1 mx-md-4">

<div v-if="showOtpFields" class="d-flex flex-column mb-4">
    <div class="d-flex flex-row align-items-center mb-4">
        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
        <div class="form-outline flex-fill mb-0">
            <input type="text" id="form3Example4c" class="form-control" v-model="otp" placeholder="Enter OTP" :class="{ 'invalid': !otp && formSubmitted}" />
            <label class="form-label" for="form3Example4c"></label>
        </div>
    </div>
    <small v-if="!otp && formSubmitted" class="text-danger">Please enter the OTP</small>
</div>

<div v-if="showPasswordFields" class="d-flex flex-row align-items-center mb-4">
    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
    <div class="form-outline flex-fill mb-0">
        <input type="password" id="form3Example4cd" class="form-control" v-model="password" placeholder="New Password" />
        <label class="form-label" for="form3Example4cd"></label>
    </div>
</div>
<div v-if="showPasswordFields" class="d-flex flex-row align-items-center mb-4">
    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
    <div class="form-outline flex-fill mb-0">
        <input type="password" id="form3Example4ce" class="form-control" v-model="confirmPassword" placeholder="Confirm Password" />
        <label class="form-label" for="form3Example4ce"></label>
    </div>
</div>
<small v-if="showPasswordFields && password !== confirmPassword" class="text-danger">Passwords do not match</small>

</form>
    </div>
</template>
<script>
export default {
    name:"PasswordChange",
    
    
}
</script>
<style lang="">
    
</style>