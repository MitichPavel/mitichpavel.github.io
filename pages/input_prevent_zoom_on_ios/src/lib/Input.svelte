<script lang="ts">
    import EyeIcon from "./UI/icon/EyeIcon.svelte";
    import EyeOffIcon from "./UI/icon/EyeOffIcon.svelte";

    export let placeholder: string = ''
    export let value: string | undefined | number = '';
    export let isValid: boolean = true;
    export let invalidMessage: string | undefined = undefined;

    let isPasswordType = $$restProps.type === 'password';
    let localInputType = $$restProps.type || 'text';
</script>

<div class="input-container" class:is-password={isPasswordType}>
    <input class={`${$$props.class} input`} class:is-password={isPasswordType} {placeholder} on:keyup on:change value={value} {...$$restProps} type={localInputType}  class:invalid={!isValid}>
    {#if isPasswordType}
        <button class="btn-show-password" on:click={() => localInputType = localInputType === 'password' ? 'text' : 'password'}>
            {#if localInputType === 'password'}
                <EyeIcon/>
            {:else}
                <EyeOffIcon/>
            {/if}
        </button>
    {/if}
</div>
{#if !isValid && invalidMessage}
    <div class="invalid-message">{invalidMessage}</div>
{/if}

<style lang="scss">
    .input-container {
        position: relative;

        .input {
            background: #F6F6F6;
            border-radius: 5px;
            font-size: 15px;
            line-height: 18px;
            color: #7D7D7D;
            padding: 8px 10px;

            &.small-size {
                width: 80px;
            }

            &.invalid {
                border: 2px solid #FF0000;
            }

            &.is-password {
                padding-right: 55px;
            }
        }

        .btn-show-password {
            display: none;
        }

        &.is-password {
            .btn-show-password {
                cursor: pointer;
                display: block;
                position: absolute;
                right: 10px;
                top: calc(50% - 12px);
                --icon-color: #7D7D7D;
            }
        }
    }

    .invalid-message {
        margin-top: 3px;
        font-size: 12px;
        line-height: 14px;
        color: #FF0000;
    }
</style>
