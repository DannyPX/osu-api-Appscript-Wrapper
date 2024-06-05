<TreeTable :value="nodes">
  <Column field="field" header="Field" bodyStyle="display: flex; gap:5px; border: 0px" expander></Column>
  <Column field="type" header="Type" bodyStyle="font-family:monospace;font-size: var(--vp-code-font-size);color: var(--vp-code-color); border: 0px"></Column>
  <Column field="description" header="Description" bodyStyle="border: 0px"></Column>
</TreeTable>