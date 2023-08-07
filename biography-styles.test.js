/* 
 * This file contains tests that check whether your solution in style.css is correct.
 * Run the tests with `pnpm run test`
 *
 * You can through this file to learn more about what is being tested, but do not modify it.
 *
 */

const fs = require('fs');
const path = require('path');
const { queries } = require('@testing-library/dom');
const w = require('jest-autograding-reporter').weight

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const styles = fs.readFileSync(path.resolve(__dirname, './style.css'), 'utf8');

jest.dontMock('fs');

describe('The biography page has required style', () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html.toString();
    const styleElement = document.createElement('style')
    styleElement.innerHTML = styles.toString();
    document.body.appendChild(styleElement)
  });

  test('heading is hotpink', function () {
    const heading = queries.getByText(document, 'Jane Doe')
    const style= window.getComputedStyle(heading)
    expect(style.color).toBe('hotpink')
  });

  test('heading has big purple dotted border', function () {
    const heading = queries.getByText(document, 'Jane Doe')
    const style= window.getComputedStyle(heading)
    expect(style.borderBottom).toBe('10px dotted purple')
  });

  test('h2 is italic', function () {
    const heading = queries.getByText(document, 'Contact information')
    const style= window.getComputedStyle(heading)
    expect(style.fontStyle).toBe('italic')
  });

  test('contact details ul has background, border, and padding', function () {
    const ul = queries.getByRole(document, 'list')
    const style= window.getComputedStyle(ul)
    expect(style.backgroundColor).toBe('rgb(238, 238, 238)')
    expect(style.border).toBe('5px solid purple')
    expect(style.padding).not.toBe('')
  });
})
